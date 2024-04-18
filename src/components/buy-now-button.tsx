'use client'

import axios from 'axios'
import { ComponentProps, useState } from 'react'

import { Product } from '@/data/types/product'
import { cn } from '@/libs/clsx-adapter'

export type BuyNowButtonProps = ComponentProps<'button'> & {
  product: Product
}

export function BuyNowButton({
  className,
  product,
  ...props
}: BuyNowButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const shouldEnableHoverButton = isCreatingCheckoutSession ? 'false' : 'true'

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/product/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar para o checkout. Tente novamente.')
    }
  }

  return (
    <button
      data-enabled={shouldEnableHoverButton}
      disabled={isCreatingCheckoutSession}
      onClick={handleBuyProduct}
      className={cn(
        'mt-auto flex w-full items-center justify-center rounded-lg bg-principal px-8 py-5 text-lg font-bold duration-200 ease-in-out hover:bg-light disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    />
  )
}

// pt: habilitado
// en: enabled
