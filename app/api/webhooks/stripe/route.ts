import { env } from "@/data/env/server";
import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(env.STRIPE_SECRET_KEY)

export async function POST(request: NextRequest) {
    const event = await stripe.webhooks.constructEvent(
        await request.text(),
        request.headers.get("stripe-signature") as string,
        env.STRIPE_WEBHOOK_SECRET
    )

    switch (event.type) {
        case "customer.subscription.deleted": {

        }
        case "customer.subscription.updated": {

        }
        case "customer.subscription.created": {
            
        }
    }

    return new Response(null, { status: 200 })
}