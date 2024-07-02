import React from 'react'
import styles from './main.module.css'

export default function Main() {
  return (
    <section className={styles.section_div}>

    <div className={styles.first}>
        <h1>
            Desgin and Build Contractor
        </h1>
        <p>With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship</p>
        <button>Get a quote</button>

    </div>
    
    <div className={styles.second}>
        <div className={styles.second_list}>
            <h2>18+</h2>
            <span>Contruction Services</span>
        </div>
        <div className={styles.second_list}>
            <h2>10+</h2>
            <span>Fundi Engineers</span>
        </div>
        <div className={styles.second_list}>
            <h2>5+</h2>
            <span>Regular Suppliers</span>
        </div>
    </div>


</section>
  )
}
