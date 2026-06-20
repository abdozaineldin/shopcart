import Stripe from "stripe";

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_WEBHOOK_SECRET, {
  apiVersion: "2026-05-27.dahlia",
});

export default stripe;
