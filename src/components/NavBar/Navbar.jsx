import Link from "next/link"
import styles from './Navbar.module.css'
import {links} from './data'
import Button from '@/elements/Button/Button'
import Logo from '@/elements/Logo/Logo'
import ModeToggle from '@/components/ModeToggle/ModeToggle'

import { Inter , Oswald } from 'next/font/google'
const logofont = Oswald({
    subsets: ['latin'] ,
    weight:['700']
  })

export default function Navbar() {
  return (
   <div className={styles.container}>

        <Logo />
        
        <div className={styles.links}>
            {links.map(link => 
                <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
            )}

        {/* <Button /> */}

        

        </div>

        <ModeToggle />
        
   </div>
  )
}
