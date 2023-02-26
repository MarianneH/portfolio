import React from "react";
import styles from "./Tags.module.css";

function Tags({ tags }) {
  return (
    <div className={styles.tags}>
      {tags.map((elem, id) => {
        return <p key={id}>{elem}</p>;
      })}
    </div>
  );
}

export default Tags;
