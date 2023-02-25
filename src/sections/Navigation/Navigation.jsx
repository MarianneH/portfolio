import React, { useState } from "react";
import styles from "./navigation.module.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Button from "../../components/Button/Button";
import Logo from "../../assets/Logo/Logo";
import Socials from "../../components/Socials/Socials";
import NavLink from "./NavLink";
import { handleDownloadFileClick } from "./handleDownloadFileClick";

const links = [
  { href: "#about", number: "01.", name: "About" },
  { href: "#projects", number: "02.", name: "Projects" },
  { href: "#work", number: "03.", name: "Work Experience" },
  { href: "#contact", number: "04.", name: "Contact" },
];

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
            {links.map((el, id) => {
              return (
                <NavLink
                  key={id}
                  data={el}
                  setIsMenuOpen={setIsMenuOpen}
                  isMenuOpen={isMenuOpen}
                />
              );
            })}
          </ul>
          <Button
            className={styles.button}
            button_text="Get my Resume"
            icon="download"
            handleClick={handleDownloadFileClick}
          />
          <div className={styles.socials}>
            <Socials />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
