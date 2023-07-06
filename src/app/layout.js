import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KungFuSanda.cl',
  description: 'Escuela de artes marciales | kung-fu GuanGong | La Florida',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        <div className='flex justify-center px-4 min-h-[calc(100vh-100px)]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
