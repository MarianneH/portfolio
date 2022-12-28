import React from "react";
import Socials from "../../components/Socials/Socials";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <Socials />
      <div className={styles.credits}>
        Design inspiration for this portfolio website:{" "}
        <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
          brittanychiang.com
        </a>
      </div>
    </div>
  );
}
