"use client"
import styles from './Button.module.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'] ,
  weight:['300' ,'900']
})
export default function Button() {
  return (
    <button
        className={styles.logout}
        onClick={() => {console.log("logout")}}
        >Details</button>
  )
}
