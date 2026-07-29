import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripeClient(): Stripe {
  if (!stripeClient) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error("Missing required environment variable: STRIPE_SECRET_KEY");
    }
    stripeClient = new Stripe(secretKey);
  }
  return stripeClient;
}
