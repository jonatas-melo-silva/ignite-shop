import { Metadata } from 'next'

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Home | Ignite Shop',
}

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-4 flex min-h-screen flex-col items-start justify-center text-base font-normal antialiased xl:mx-0">
      <Header />
      {children}
    </div>
  )
}
