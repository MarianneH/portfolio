import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Button from "../../components/Button/Button";
import Logo from "../../assets/Logo/Logo";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className={styles.container}>
        <Logo className={styles.logo} />
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
            <div
              className={styles.links}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className={styles.links}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              About
            </div>
          </li>
          <li>
            <div
              className={styles.links}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Contact
            </div>
          </li>
        </ul>
        <Button className={styles.button} button_text="Get my Resume" />
      </div>
    </nav>
  );
}

export default Navigation;
