import React from "react";
import styles from "./navigation.module.css";

function NavLink({ data, setIsMenuOpen, isMenuOpen }) {
  return (
    <li>
      <a
        href={data.href}
        className={styles.links}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={styles.number}>{data.number}</span>
        {data.name}
      </a>
    </li>
  );
}

export default NavLink;
