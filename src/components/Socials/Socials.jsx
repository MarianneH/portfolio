import React from "react";
import styles from "./socials.module.css";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export default function Socials() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/marianne-helbig/"
        className={styles.socials}
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://github.com/MarianneH" className={styles.socials}>
        <img src={github} alt="GitHub" />
      </a>
      <a
        href="mailto:marianne.helbig@googlemail.com"
        className={styles.socials}
      >
        <img src={email} alt="eMail" />
      </a>
    </div>
  );
}
