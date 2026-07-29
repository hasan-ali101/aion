import type { NextApiRequest, NextApiResponse } from "next";

import { clinikoRequest, filter } from "@/lib/cliniko/client";
import type { ClinikoPatient, ClinikoPatientsListResponse, PatientCandidate } from "@/lib/cliniko/types";

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function maskEmail(email: string | null): string | null {
  if (!email) return null;
  const [local, domain] = email.split("@");
  if (!domain) return null;
  const tld = domain.includes(".") ? domain.slice(domain.lastIndexOf(".")) : "";
  const visible = local.slice(0, 1) || "*";
  return `${visible}***@***${tld}`;
}

function maskPhone(patient: ClinikoPatient): string | null {
  const phone = patient.patient_phone_numbers[0];
  if (!phone) return null;
  const digits = (phone.normalized_number || phone.number).replace(/\D/g, "");
  if (digits.length < 4) return null;
  return `••• ${digits.slice(-4)}`;
}

function toCandidate(patient: ClinikoPatient): PatientCandidate {
  return {
    patientId: patient.id,
    firstName: patient.preferred_first_name?.trim() || patient.first_name,
    lastName: patient.last_name,
    maskedEmail: maskEmail(patient.email),
    maskedPhone: maskPhone(patient),
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { dob } = req.query;

  if (typeof dob !== "string" || !DATE_PATTERN.test(dob)) {
    return res.status(400).json({ error: "A valid 'dob' date (YYYY-MM-DD) is required" });
  }

  try {
    const data = await clinikoRequest<ClinikoPatientsListResponse>("/patients", {
      query: { "q[]": filter("date_of_birth", "=", dob) },
    });

    return res.status(200).json({ candidates: data.patients.map(toCandidate) });
  } catch (error) {
    console.error("patients lookup error", error);
    return res.status(502).json({
      error: "We couldn't check for an existing record right now. Please try again shortly.",
    });
  }
}
