import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sergey Chernenko — Frontend Developer',
  description:
    'Frontend Developer with 4+ years of experience. Specialized in React, Next.js, TypeScript, Pixi.js.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy`}>{children}</body>
    </html>
  )
}
