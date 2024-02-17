import './globals.css'
import { Inter , Montserrat } from 'next/font/google'

import Navbar from '@/components/NavBar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'] ,
  weight:['300' ,'900']
})

export const metadata = {
  title: 'SWI9ASHOP',
  description: 'Keyword research: Identifying the words and phrases that people are using to search for information related to your business or content.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className="container">
          <Navbar />
            {children}
            <Footer />
         </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
