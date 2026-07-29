import type { NextApiRequest, NextApiResponse } from "next";

import { getStripeClient } from "@/lib/stripe/client";
import { clinikoRequest } from "@/lib/cliniko/client";
import type { ClinikoPatient } from "@/lib/cliniko/types";
import { getBookingServiceById } from "@/lib/data/booking-services";

interface CreateCheckoutBody {
  serviceId: string;
  patientId: string;
  appointmentId: string;
  locationType: "remote" | "in-person";
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { serviceId, patientId, appointmentId, locationType } = req.body as Partial<CreateCheckoutBody>;

  const service = getBookingServiceById(serviceId ?? "");
  if (!service) {
    return res.status(400).json({ error: "Unknown service" });
  }
  if (!patientId || !appointmentId || !locationType) {
    return res.status(400).json({ error: "Missing patient, appointment, or location reference" });
  }

  const protocol = (req.headers["x-forwarded-proto"] as string) ?? "http";
  const origin = `${protocol}://${req.headers.host}`;

  try {
    const patient = await clinikoRequest<ClinikoPatient>(`/patients/${patientId}`);

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: patient.email ?? undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: Math.round(service.priceGbp * 100),
            product_data: { name: service.name },
          },
        },
      ],
      // Links the Stripe payment back to the Cliniko records for manual reconciliation,
      // since Cliniko's API has no way to create an invoice/online payment link itself.
      metadata: {
        clinikoPatientId: patientId,
        clinikoAppointmentId: appointmentId,
        serviceId: service.id,
        locationType,
      },
      success_url: `${origin}/book/ima/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/book/ima`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("stripe checkout session error", error);
    return res.status(502).json({
      error: "We couldn't set up payment right now. Please try again shortly.",
    });
  }
}
