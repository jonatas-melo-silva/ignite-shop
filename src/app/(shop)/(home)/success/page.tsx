import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ComponentProps } from 'react'
import Stripe from 'stripe'

import { stripe } from '@/libs/stripe-adapter'

type InfosSession = {
  customerName: string
  product: {
    name: string
    images: string
  }
}

async function getInfosSession(id: string): Promise<InfosSession> {
  const session = await stripe.checkout.sessions.retrieve(id, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name as string
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    customerName,
    product: {
      name: product.name,
      images: product.images[0],
    },
  }
}

export type SuccessPageProps = ComponentProps<'main'> & {
  searchParams: {
    id: string
  }
}

export default async function SuccessPage({
  searchParams,
  ...props
}: SuccessPageProps) {
  if (!searchParams.id) {
    redirect('/')
  }

  const { customerName, product } = await getInfosSession(searchParams.id)
  return (
    <main
      className="mx-auto my-0 flex h-[656px] w-full max-w-[590px] flex-col items-center justify-evenly px-0 py-8"
      {...props}
    >
      <h1 className="text-[32px] font-bold text-title">Compra efetuada!</h1>

      <div className=" flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        <Image
          src={product.images}
          alt=""
          width={120}
          height={110}
          className="object-cover"
        />
      </div>

      <p className="text-center text-2xl font-normal">
        Uhuul <strong>{customerName}</strong>, sua{' '}
        <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link
        href="/"
        className="text-xl font-bold text-principal duration-200 ease-in-out hover:text-light"
      >
        Voltar ao catálogo
      </Link>
    </main>
  )
}
