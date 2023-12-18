import type { Metadata } from 'next'
import { Playfair_Display, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const playfair = Playfair_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})
const IBM_plex_sans = IBM_Plex_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm',
})
const IBM_plex_mono = IBM_Plex_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-mono',
})

export const metadata: Metadata = {
  title: 'IconoGraph',
  description: 'Information Visualization Project - UNIBO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${IBM_plex_sans.variable} font-sans ${playfair.variable} font-display ${IBM_plex_mono.variable} font-mono`}>
      <body className="select-none bg-slate-950">
        <Header />
        {children}
      </body>
    </html>
  )
}
