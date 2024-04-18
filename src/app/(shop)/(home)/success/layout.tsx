import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compra efetuada | Ignite Shop',
  robots: 'noindex, nofollow',
}
export default function SuccessLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
