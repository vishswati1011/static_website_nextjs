'use client'
import React from 'react'
import styles from "./header.module.css";
export default function Header() {

  const toggleMenu = () => {
    const menu = window.document.querySelector('.' + styles.nav_list);
    menu.classList.toggle(styles.active);
    // menu.classList.toggle(`${styles.nav_list}  ${styles.active}`);

  }

  return (
    <div>
       <nav className={styles.header}>
      <h1>Aashi homes</h1>

      <div className={styles.menu}>
        <span  onClick={toggleMenu}>Go to</span>
        <ul className={styles.nav_list}>
          <li>About Us</li>
          <li>Service</li>
          <li>Products</li>
          <li><button className={styles.list_btn}>Content</button></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
