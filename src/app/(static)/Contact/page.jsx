import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import image from 'public/images/12.svg'

export const metadata = {
  title: 'SWI9ASHOP - CONTACT',
  description: 'Keyword research: Identifying the words and phrases that people are using to search for information related to your business or content.',
}

export default function Contact() {
  return (
    <div  className={styles.container}>
      <div className={styles.right}>
        <Image
           className= {styles.image}
           src={image}
           alt='contact image'
        />
      </div>
      <div className={styles.left}> 
          <div className={styles.input_contain}>
            <label className={styles.label} htmlFor="name">FullName :</label>
            <input className={styles.input} type="text" name='name'/>
          </div>
          <div className={styles.input_contain}>
            <label className={styles.label} htmlFor="name">Phone Number :</label>
            <input className={styles.input} type="text" name='name'/>
          </div>
          <div className={styles.input_contain}>
            <label className={styles.label} htmlFor="name">Email :</label>
            <input className={styles.input} type="email" name='name'/>
          </div>
          <div className={styles.input_contain}>
            <label className={styles.label} htmlFor="name">Message :</label>
            <textarea className={styles.input} type="text" name='name'/>
          </div>
          <div className={styles.btn_contain}>
            <button className={styles.submit}>Submit</button>
          </div>
      </div>

    </div>
  )
}
