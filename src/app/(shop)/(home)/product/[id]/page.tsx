import Image from 'next/image'
import { ComponentProps } from 'react'
import Stripe from 'stripe'

import { BuyNowButton } from '@/components/buy-now-button'
import { Product } from '@/data/types/product'
import { stripe } from '@/libs/stripe-adapter'
import { formatPrice } from '@/utils/format-price'

async function getProduct(id: string): Promise<Product> {
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: price.unit_amount ?? 0,
    description: product.description ?? '',
    defaultPriceId: price.id,
  }
}

export type ProductPageProps = ComponentProps<'main'> & {
  params: {
    id: string
  }
}

export default async function ProductPage({
  params,
  ...props
}: ProductPageProps) {
  const product = await getProduct(params.id)

  return (
    <main
      className="mx-auto my-0 grid max-w-[1180px] grid-cols-2 items-stretch gap-8"
      {...props}
    >
      <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        <Image
          src={product.imageUrl}
          alt=""
          width={520}
          height={480}
          className="object-cover"
        />
      </div>

      <section className="flex flex-col">
        <header className="flex flex-col gap-4">
          <h1 className="text-[32px] font-bold text-text">{product.name}</h1>
          <span className="text-[32px] font-normal text-light">
            {formatPrice(product.price)}
          </span>
        </header>

        <p className="mt-10 text-lg font-normal text-text">
          {product.description}
        </p>

        <BuyNowButton
          product={product}
          className="mt-auto flex w-full items-center justify-center rounded-lg bg-principal px-8 py-5 text-lg font-bold duration-200 ease-in-out hover:bg-light"
        >
          Comprar agora
        </BuyNowButton>
      </section>
    </main>
  )
}
