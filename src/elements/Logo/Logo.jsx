import Link from "next/link"
import styles from './Logo.module.css'
import {Oswald } from 'next/font/google'
const logofont = Oswald({
    subsets: ['latin'] ,
    weight:['700']
  })

export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${logofont.className}`}>
        <span>O</span>ne<span>.</span>
    </Link>
  )
}
