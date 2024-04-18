import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product | Ignite Shop',
}
export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
