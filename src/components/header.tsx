import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'

import logoImg from '@/assets/logo.svg'
import { cn } from '@/libs/clsx-adapter'

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        'mx-auto my-0 flex w-full max-w-[1180px] px-0 py-8',
        className,
      )}
      {...props}
    >
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={52} />
      </Link>
    </header>
  )
}
