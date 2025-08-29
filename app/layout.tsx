import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrooveGuard - Data Privacy Compliance',  description: 'Professional data privacy compliance services',}

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
