import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, strugglerguts here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="" width={500} height={500} className={styles.Image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde sint ex aspernatur dolorum corrupti minima, fuga, ullam excepturi dolor error at beatae adipisci earum blanditiis dolorem voluptatum iste! Aliquam?</p>
          <button className={styles.button}>
            <a href="/">Read More</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
