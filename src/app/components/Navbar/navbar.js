import React from 'react'
import styles from "./navbar.module.css"

function navbar() {
  return (
    <div className={styles.Container}>
      <a href='https://www.inventurerecruitment.com'><img src="https://www.inventurerecruitment.com//uploads/inventure-logo-white_nav.svg" href="https://www.inventurerecruitment.com" width={100} alt="logo" className={styles["Navbar-Logo"]} /></a>
    </div>
  )
}

export default navbar