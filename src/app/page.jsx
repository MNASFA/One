import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.svg'

export const metadata = {
  title: 'SWI9ASHOP - HOME',
  description: 'Keyword research: Identifying the words and phrases that people are using to search for information related to your business or content.',
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Ride in Style: Explore the Latest Trends in Biking</h1>
        <p className= {styles.desc}>Welcome to <span>PIKALA</span>, where passion meets performance in the world of cycling. Immerse yourself in a collection curated for enthusiasts who seek style, comfort, and cutting-edge technology.</p>
        <button className={styles.hero_btn}>Explore</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt='hero image' />
      </div>
    </div>
  )
}
