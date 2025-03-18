import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Braided | Whirlpool of Thrive',
  description: 'Discover your path to wellbeing through the Whirlpool of Thrive model',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}