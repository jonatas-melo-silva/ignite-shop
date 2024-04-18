import Stripe from 'stripe'

import { env } from '@/env'

export const stripe = new Stripe(env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
  appInfo: {
    name: 'Ignite Store',
    version: '0.1.0',
  },
})
