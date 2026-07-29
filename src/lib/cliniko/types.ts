export interface ClinikoAvailableTime {
  appointment_start: string;
}

export interface ClinikoAvailableTimesResponse {
  available_times: ClinikoAvailableTime[];
  total_entries: number;
}

export interface ClinikoPatientPhoneNumber {
  number: string;
  normalized_number?: string;
  phone_type: string;
}

export interface ClinikoPatient {
  id: string;
  first_name: string;
  preferred_first_name: string | null;
  last_name: string;
  date_of_birth: string | null;
  email: string | null;
  patient_phone_numbers: ClinikoPatientPhoneNumber[];
  accepted_email_marketing: boolean | null;
  accepted_sms_marketing: boolean | null;
}

export interface ClinikoPatientsListResponse {
  patients: ClinikoPatient[];
  total_entries: number;
}

export interface ClinikoIndividualAppointment {
  id: string;
  starts_at: string;
  ends_at: string;
  telehealth_url: string | null;
  notes: string | null;
  cancelled_at: string | null;
  patient: { links: { self: string } };
}

/** A candidate patient surfaced to the booker for self-confirmation — contact details are masked. */
export interface PatientCandidate {
  patientId: string;
  firstName: string;
  lastName: string;
  maskedEmail: string | null;
  maskedPhone: string | null;
}
