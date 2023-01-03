import React, { useState } from "react";
import styles from "./ProjectCards.module.css";
import projectsJson from "./Projects_object.json";
import travel from "../../assets/projects/travel_memory.png";
import regroup from "../../assets/projects/lets_regroup.png";
import comfort from "../../assets/projects/your_comfort_zone.png";

function ProjectCard() {
  const [projects, setProjects] = useState(projectsJson);
  const [images, setImages] = useState([travel, comfort, regroup]);
  return (
    <div className={styles.container}>
      {projects.map((el, index) => {
        return (
          <div key={index} className={styles.card}>
            <div
              className={
                !(index % 2)
                  ? `${styles.headline}`
                  : `${styles.headline} ${styles.left}`
              }
            >
              <div className={styles.featured}>featured project</div>
              <h3>{el.name}</h3>
            </div>

            <div
              className={
                !(index % 2)
                  ? `${styles.image_container}`
                  : `${styles.image_container} ${styles.left}`
              }
            >
              <img src={images[index]} alt={el.name} className={styles.image} />
              <span></span>
            </div>
            <div
              className={
                !(index % 2)
                  ? `${styles.infos}`
                  : `${styles.infos} ${styles.left}`
              }
            >
              <p className={styles.description}>{el.description}</p>
              <div
                className={
                  !(index % 2)
                    ? `${styles.tags}`
                    : `${styles.tags} ${styles.left}`
                }
              >
                {el.tags.map((elem, index2) => {
                  return <p key={index2}>{elem}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
