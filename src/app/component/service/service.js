import React from 'react'
import styles from './service.module.css'
import Image from 'next/image'
export default function Service() {
  return (
    <div className={styles.service}>
        <div className={styles.section_one}>
            <h1>
                Services
            </h1>
            <p>Building Dreams, Crafting Realities</p>
        </div>
        <div className={styles.section_two}>

            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src="/assets/image1.png" alt="" width={300} height={300}/>
                </div>
                <div className={styles.card_list}>
                    <h2>Consultation Service</h2>
                    <ul>
                        <li>Design & Build</li>
                        <li>cost analysis</li>
                        <li>Permits & Processes</li>
                        <li>Scheduling</li>
                        <li>Phasing</li>
                        <li>Resource management</li>
                    </ul>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src="/assets/image2.png" alt="" width={300} height={300}/>
                </div>
                <div className={styles.card_list}>
                    <h2>General construction</h2>
                    <ul>
                        <li>New Construction</li>
                        <li>Building Addition</li>
                        <li>Renovation</li>
                        <li>Restoration</li>
                        <li>Rebuilding from Drainage</li>
                        <li>Drainage</li>
                    </ul>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src="/assets/image3.png" alt="" width={300} height={300}/>
                </div>
                <div className={styles.card_list}>
                    <h2>Maintenance Service</h2>
                    <ul>
                        <li>Windows & Doors Fiiting</li>
                        <li>Siding Repairs</li>
                        <li>Plumbing</li>
                        <li>Electrical & Solar Fitting</li>
                        <li>HVAC</li>
                        <li>Remodeling</li>
                    </ul>
                </div>
            </div>


        </div>

    </div>

  )
}
