import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'



import { FaHeart } from "react-icons/fa6";

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
 
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export const metadata = {
  title: 'SWI9ASHOP - PRODUCTS',
  description: 'Keyword research: Identifying the words and phrases that people are using to search for information related to your business or content.',
}



export default async function Blog() {

  const data = await getData()
  const products = data.products ;
 

  return (
    <div className={styles.mainContainer}>
        {
          products.map( product => (
            <Link href= {`/Blog/${product.id}`} className={styles.post} key ={product.id}> 
            <div className={styles.container} >
              <FaHeart className={styles.heart}/>
              <div className={styles.note}>{product.discountPercentage}%</div>
              <Image 
                  className= {styles.image}
                  src={product.thumbnail}
                  width={350}
                  height={250}
                  alt='post image'
              />
            </div>
            <div className={styles.content}>
             <div className={styles.topcard}>
               <h1 className={styles.title}>{product.title}</h1>
               <span className={styles.price}>{product.price}DH</span>
             </div>
              <div><p className={styles.desc}>{product.description}</p>
              </div>
              
            </div>
          </Link>
          )

          )
        }
    </div>
  )
}
