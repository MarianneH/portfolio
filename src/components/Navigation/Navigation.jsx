import React, { useState } from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className={styles.logo}>Logo</div>
      <div
        className={styles.burger_menu}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={styles.burger_line}></div>
        <div className={styles.burger_line}></div>
        <div className={styles.burger_line}></div>
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <p onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</p>
        </li>
        <li>
          <p onClick={() => setIsMenuOpen(!isMenuOpen)}>About</p>
        </li>
        <li>
          <p onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
