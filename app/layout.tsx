import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caroline (Yeaeun) Song | Computer Engineering Portfolio',
  description: 'Personal portfolio of Caroline Song showcasing AI/ML research in medical imaging, assistive technology development, and healthcare innovation at Georgia Tech.',
  keywords: 'Caroline Song, Yeaeun Song, Computer Engineering, AI, Machine Learning, Medical Imaging, Healthcare Technology, Georgia Tech, Deep Learning',
  authors: [{ name: 'Caroline Song' }],
  openGraph: {
    title: 'Caroline Song | Computer Engineering Portfolio',
    description: 'Engineering compassion through technology and innovation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
