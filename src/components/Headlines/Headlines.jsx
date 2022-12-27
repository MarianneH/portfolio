import React from "react";
import styles from "./Headlines.module.css";

function Headlines({ headline_text }) {
  return (
    <h2 className={styles.text}>
      <span>{headline_text}</span>
    </h2>
  );
}

export default Headlines;
