import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppContext } from '@/context/contextApi'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube Clone',
  description: 'Made by Tahmeer Pasha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContext>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </AppContext>
    </html>
  )
}
