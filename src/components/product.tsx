import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

import { cn } from '@/libs/clsx-adapter'

export type ProductProps = ComponentProps<'div'> & {
  image: StaticImageData | string
  name: string
  price: string
}

export function Product({
  className,
  image,
  name,
  price,
  ...props
}: ProductProps) {
  return (
    <div
      className={cn(
        'group relative flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1',
        className,
      )}
      {...props}
    >
      <Image
        src={image}
        alt=""
        width={520}
        height={480}
        className="object-cover"
      />

      <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-elements p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <strong className="text-xl font-bold text-title">{name}</strong>
        <span className="text-2xl font-bold text-light">{price}</span>
      </footer>
    </div>
  )
}
