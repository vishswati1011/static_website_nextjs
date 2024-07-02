import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about_div}>
        <div className={styles.section_a}>
            <Image width={500} height={600} src="/assets/about.png" alt="image" className={styles.image_css}/>
        </div>
        <div className={styles.section_b}>
            <h3>About us</h3>
            <h2>Efficiency, Building, Budget & Time</h2>
            <p>
                Hideva Group is a team of skilled construction professionals with a passion for building and a commitment to excellence. We provide a range of services, from small-scale renovations to large-scale commercial construction. We believe in transparency and communication, and we work closely with our clients to ensure their needs are met. Thank you for considering us for your construction needs.
            </p>
        </div>
         
    </div>
    
  )
}
