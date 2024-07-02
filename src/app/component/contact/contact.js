import React from 'react'
import styles from './contact.module.css'

export default function Contact() {
  return (
   
    <div className={styles.contact_div}>
    <div className={styles.section_title}>
        <h1>Get in Touch</h1>
        <p>
            Reach out to us and let&apos;s turn your construction dreams into reality
        </p>
    <form className={styles.form}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter your name"/>
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email"/>
        <label>Message</label>
        <textarea name="message" placeholder="Enter your message"></textarea>
        <button>Submit</button>
    </form>

</div>
</div>
  )
}
