import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description:
    'Ignite Shop is a modern e-commerce platform built with Next.js.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={roboto.className} lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
