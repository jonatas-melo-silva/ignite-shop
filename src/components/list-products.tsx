'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { Product as ProductType } from '@/data/types/product'
import { useWindowWidth } from '@/hooks/use-window-width'
import { cn } from '@/libs/clsx-adapter'
import { formatPrice } from '@/utils/format-price'

import { Product } from './product'

export type ListProductsProps = ComponentProps<'div'> & {
  products: ProductType[]
}

export function ListProducts({
  className,
  products,
  ...props
}: ListProductsProps) {
  const { windowWidth } = useWindowWidth()

  const md = windowWidth < 768
  const xl = windowWidth < 1536

  const perView = md ? 1 : xl ? 2 : 3

  const [sliderRef] = useKeenSlider({
    slides: {
      perView,
      spacing: 48,
    },
  })
  return (
    <div ref={sliderRef} className={cn('keen-slider', className)} {...props}>
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
          <Product
            className="keen-slider__slide"
            image={product.imageUrl}
            name={product.name}
            price={formatPrice(product.price)}
          />
        </Link>
      ))}
    </div>
  )
}
