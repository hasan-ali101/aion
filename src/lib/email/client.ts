import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Missing required environment variable: RESEND_API_KEY");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}
