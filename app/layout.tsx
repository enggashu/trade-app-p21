import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'P21 VENTURES - Scale-Up Studio & Co-Investment Platform',
  description: 'Thailand–Gulf focused scale-up studio and co-investment platform for companies ready to grow beyond their home markets across ASEAN and GCC.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

