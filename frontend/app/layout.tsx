import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindBoy - Your Mental Health Companion',
  description: 'A Gameboy-inspired mental health chat application',
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

