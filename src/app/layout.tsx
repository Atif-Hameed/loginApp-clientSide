import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'

// in caase of using local font
// import localfont from '@/font/path'
// const mylocalFont = localfont({src: './myfont.wfft2'})

import './globals.css'
import { Provider } from 'react-redux'
import store from '@/Redux/store'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' })
const roboto = Roboto({ subsets: ['latin'], weight: '500', variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className, poppins.variable, roboto.variable} font-sans`}>
        {/* <Provider store={store}> */}
          {children}
        {/* </Provider> */}
      </body>
    </html>
  )
}
