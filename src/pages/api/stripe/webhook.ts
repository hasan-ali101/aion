import type { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "node:stream/consumers";
import type Stripe from "stripe";

import { getStripeClient } from "@/lib/stripe/client";
import { clinikoRequest } from "@/lib/cliniko/client";
import type { ClinikoIndividualAppointment, ClinikoPatient } from "@/lib/cliniko/types";
import { sendAbandonedPaymentAlert } from "@/lib/email/notify-abandoned-payment";

// Stripe needs the raw request body to verify the webhook signature.
export const config = {
  api: { bodyParser: false },
};

async function handleExpiredCheckout(session: Stripe.Checkout.Session) {
  const { clinikoPatientId, clinikoAppointmentId } = session.metadata ?? {};
  if (!clinikoPatientId || !clinikoAppointmentId) return;

  const [appointment, patient] = await Promise.all([
    clinikoRequest<ClinikoIndividualAppointment>(`/individual_appointments/${clinikoAppointmentId}`),
    clinikoRequest<ClinikoPatient>(`/patients/${clinikoPatientId}`),
  ]);

  const firstName = patient.preferred_first_name?.trim() || patient.first_name;
  await sendAbandonedPaymentAlert({
    patientName: `${firstName} ${patient.last_name}`,
    startsAt: appointment.starts_at,
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const signature = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (typeof signature !== "string" || !webhookSecret) {
    return res.status(400).json({ error: "Missing signature or webhook secret" });
  }

  const rawBody = await buffer(req);
  const stripe = getStripeClient();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("stripe webhook signature verification failed", error);
    return res.status(400).json({ error: "Invalid signature" });
  }

  if (event.type === "checkout.session.expired") {
    try {
      await handleExpiredCheckout(event.data.object);
    } catch (error) {
      console.error("abandoned payment alert failed", error);
    }
  }

  return res.status(200).json({ received: true });
}
