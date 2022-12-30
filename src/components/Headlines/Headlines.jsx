import React from "react";
import styles from "./Headlines.module.css";

function Headlines({ headline_text, number }) {
  return (
    <h2 className={styles.text}>
      <span>
        <span className={styles.number}>{number}</span> {headline_text}
      </span>
    </h2>
  );
}

export default Headlines;
