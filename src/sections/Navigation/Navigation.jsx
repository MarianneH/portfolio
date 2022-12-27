import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Button from "../../components/Button/Button";

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
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.link_list}>
          <li>
            <p
              className={styles.links}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Home
            </p>
          </li>
          <li>
            <p
              className={styles.links}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              About
            </p>
          </li>
          <li>
            <p
              className={styles.links}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Contact
            </p>
          </li>
        </ul>
        <Button button_text="Get my Resume" />
      </div>
    </nav>
  );
}

export default Navigation;
