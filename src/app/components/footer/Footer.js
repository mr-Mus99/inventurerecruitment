"use client";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-content"]}>
          {/* Company Info */}
          <div className={styles["footer-section"]}>
            <h3>About Us</h3>
            <p> recruitment for the modern era</p>
          </div>

          {/* Quick Links */}
          <div className={styles["footer-section"]} style={{ textAlign: "center" }}>
            <h3>Quick Links</h3>
            <div >

              {/* english */}
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="tel:0772123439">Contact</a></li>
              </ul>
            </div>
          </div>
          {/* Contact & Newsletter */}
          <div className={styles["footer-section"]}>
            <h3>Contact Info</h3>
            <a href="mailto: support@hajaaty.com">  info@inventurerecruitment.com </a>
            <div className={styles["social-links"]}>
              <a href="https://www.linkedin.com/company/inventure-recruitment/" target="_blank" rel="noopener noreferrer" title="Facebook">👤</a>
              <a href="http://www.inventurerecruitment.com" title="Twitter">🐦</a>
              <a href="https://www.linkedin.com/company/inventure-recruitment/" target="_blank" rel="noopener noreferrer" title="Instagram">🅾</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles["footer-bottom"]}>
          <p>&copy; {new Date().getFullYear()} inventurerecruitment. All rights reserved.</p>

        </div>
      </div>
    </footer>

  );
}

export default Footer;
