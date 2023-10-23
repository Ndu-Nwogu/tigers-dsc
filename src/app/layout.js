import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Nav from './Nav'
import Foot from './Foot'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tigers DSC',
  description: 'The official website of the Texas Southern University Data Science Club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#101010] text-white font-light`}>
      <Nav/>
      {children}
      <Foot/>
      </body>
    </html>
  )
}
