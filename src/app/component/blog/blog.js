import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'
export default function Blog() {
  return (
    <div className={styles.blog_div}>
        <div className={styles.section_title}>
            <h1>Blog</h1>
            <p>
                Insightful blogs about the construction industry.
            </p>
        </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <Image src="/assets/image3.png" width={350} height={300} alt="image" className={styles.image_css} />
                    <div className={styles.blogdata}>
                        <p className={styles.date}>2 July 2024</p>
                        <p className={styles.title}>What are the processes involved in putting up a building?</p>
                        <p className={styles.blog}>The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...</p>
                        <button>Read more</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src="/assets/image4.png" width={350} height={300} alt="image" className={styles.image_css} />
                    <div className={styles.blogdata}>
                        <p className={styles.date}>2 July 2024</p>
                        <p className={styles.title}>What are the processes involved in putting up a building?</p>
                        <p className={styles.blog}>The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...</p>
                        <button>Read more</button>
                    </div>
                </div>


                <div className={styles.card}>
                    <Image src="/assets/image5.png" width={350} height={300} alt="image" className={styles.image_css} />
                    <div className={styles.blogdata}>
                        <p className={styles.date}>2 July 2024</p>
                        <p className={styles.title}>What are the processes involved in putting up a building?</p>
                        <p className={styles.blog}>The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...</p>
                        <button>Read more</button>
                    </div>
                </div>

            </div>

    </div>
  )
}
