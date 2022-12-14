import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

export default async function CreateCheckout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: Product[] }

  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Method not allowed.' })
  }

  if (!products) {
    return res.status(400).json({ error: 'Product not found.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',

    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1
    }))
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
