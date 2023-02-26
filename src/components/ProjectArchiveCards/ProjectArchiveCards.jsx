import React from "react";
import Tags from "../Tags/Tags";
import styles from "./ProjectArchiveCards.module.css";
import { SlFolder } from "react-icons/sl";

function ProjectArchiveCards({ archived }) {
  return (
    <div>
      <div className={styles.upper}>
        <SlFolder />
      </div>
      <div className={styles.project_details}>
        <h3></h3>
        <p></p>
        <Tags tags={[]} />
      </div>
    </div>
  );
}

export default ProjectArchiveCards;
