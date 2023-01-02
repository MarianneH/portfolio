import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ image, name, description, tags }) {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map((el, index) => {
          return <div>el.tag_name</div>;
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
