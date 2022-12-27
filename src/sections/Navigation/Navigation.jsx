import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div
          className={styles.burger_menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdClose className={styles.burger_logo} />
          ) : (
            <FiMenu className={styles.burger_logo} />
          )}
        </div>
      </div>

      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
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
