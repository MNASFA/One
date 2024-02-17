import Image from 'next/image'
import styles from './Foteer.module.css'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'] ,
  weight:['300']
})

import {social_media} from './data'

export default function Footer() {
  return (
    <div className={styles.container}>
      
      <div className={oswald.className}> © 2024 One, All rights reserved. </div>

      <div className={styles.social}>

        {
          
        social_media.map( media =>
        
          <Image
          key={media.id}
          src={`/images/icons/${media.name}.png`}
          width={20}
          height={20}
          className={styles.icon}
          alt='social icon'
        />

        )

        }
        
      </div>
    </div>
  )
}
