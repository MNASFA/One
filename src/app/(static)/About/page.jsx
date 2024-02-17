import styles from "./page.module.css"
import Image from "next/image"
import Bike from 'public/images/bike.jpg'

export const metadata = {
  title: 'SWI9ASHOP - ABOUT',
  description: 'Keyword research: Identifying the words and phrases that people are using to search for information related to your business or content.',
}

export default function About() {
  return (
    <div className={styles.container}>
        <div className={styles.left_side}>
            <strong className={styles.qs}>How it started !</strong>
            <h1 className={styles.title}>"The Road Less Traveled: Our Bike Adventure"</h1>
            <p className={styles.description}>Embark on a journey with us as we navigate the winding paths and open roads of our bike adventure. "The Road Less Traveled" isn't just a phrase; it's a mantra that guides our passion for exploration and discovery on two wheels. From the rugged terrain of mountain trails to the smooth asphalt of urban streets, our bike adventure encompasses a diverse range of landscapes and experiences.</p>            
        </div>
        <div className={styles.right_side}>
            <Image 
              src={Bike}
              alt="about img"
              className={styles.img}
             
            />
            <div className={styles.details}>
              <div className={styles.item}>
                    <div className={styles.nbr}>+3</div>
               
                Years d'experience
              </div>
              <div className={styles.item}>
                  <div className={styles.nbr}>+450</div>
               
                Years d'experience
              </div>
              <div className={styles.item}>
                  <div className={styles.nbr}>+25</div>
               
                Years d'experience
              </div>
              <div className={styles.item}>
                  <div className={styles.nbr}>+150K</div>
               
                Years d'experience
              </div>
            </div>
        </div>
    </div>
  )
}
