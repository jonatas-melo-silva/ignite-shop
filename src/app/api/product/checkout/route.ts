import { env } from '@/env'
import { stripe } from '@/libs/stripe-adapter'

export async function POST(request: Request) {
  const { priceId } = await request.json()

  const successUrl = `${env.NEXT_PUBLIC_BASE_URL}/success?id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${env.NEXT_PUBLIC_BASE_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return Response.json({ checkoutUrl: checkoutSession.url })
}
