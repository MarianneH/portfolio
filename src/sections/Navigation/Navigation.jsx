import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Button from "../../components/Button/Button";
import Logo from "../../assets/Logo/Logo";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.navigation}>
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
              <a
                href="#about"
                className={styles.links}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                01. About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={styles.links}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                02. Projects
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={styles.links}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                03. Work Experience
              </a>
            </li>
          </ul>
          <Button className={styles.button} button_text="Get my Resume" />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
