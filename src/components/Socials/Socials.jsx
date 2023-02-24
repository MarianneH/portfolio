import React from "react";
import styles from "./socials.module.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Socials() {
  return (
    <div className={styles.container}>
      <span className={styles.next}>
        <a
          href="https://www.linkedin.com/in/marianne-helbig/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={styles.socials} />
        </a>
        <a
          href="https://github.com/MarianneH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.socials} />
        </a>
        <a href="mailto:marianne.helbig@googlemail.com">
          <AiOutlineMail className={styles.socials} />
        </a>
      </span>
    </div>
  );
}
