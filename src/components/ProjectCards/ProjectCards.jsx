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
            <div className={styles.image_container}>
              <img src={images[index]} alt={el.name} className={styles.image} />
              <span></span>
            </div>
            <div className={styles.infos}>
              <div className={styles.featured}>featured</div>
              <h3>{el.name}</h3>
              <p className={styles.description}>{el.description}</p>
              <div className={styles.tags}>
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
