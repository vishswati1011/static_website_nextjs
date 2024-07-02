import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer_div}>
        <div className={styles.footer_left}>
            <p> Aashi homes</p>
        </div>
    <div className={styles.footer_center}>

        <div className={styles.footer_section}>
            <p>Company</p>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
        </div>

        <div className={styles.footer_section}>
            <p>Resources</p>
            <ul>
                <li>FAQ</li>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>

        <div className={styles.footer_section}>
            <p>Contact</p>
            <ul>
                <li>Indore, India</li>
                <li>Call us</li>
                <li>Email us</li>
            </ul>
        </div>

    </div>
        
        <div className={styles.footer_right}>
            <p>fackbook Id</p>
        </div>
    </div>
  )
}
