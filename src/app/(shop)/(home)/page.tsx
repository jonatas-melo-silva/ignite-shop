import Stripe from 'stripe'

import { ListProducts } from '@/components/list-products'
import { Product } from '@/data/types/product'
import { stripe } from '@/libs/stripe-adapter'

async function getProducts(): Promise<Product[]> {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return products as Product[]
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-product">
      <ListProducts products={products} />
    </main>
  )
}
