import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Igroup Patagonia',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={quickSand.className}>{children}</body>
      <Analytics />
    </html>
  )
}
