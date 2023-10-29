import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ralph Flauren',
  description: 'The next great retail brand',
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
