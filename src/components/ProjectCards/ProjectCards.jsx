import React, { useState } from "react";
import styles from "./ProjectCards.module.css";
import projectsJson from "./Projects_object.json";
import travel from "../../assets/projects/travel_memory.png";
import regroup from "../../assets/projects/lets_regroup.png";
import comfort from "../../assets/projects/your_comfort_zone.png";
import appointment from "../../assets/projects/appointment_app.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

function ProjectCard() {
  const [projects, setProjects] = useState(projectsJson);
  const [images, setImages] = useState([appointment, travel, comfort, regroup]);
  return (
    <div className={styles.container}>
      {projects.map((el, index) => {
        return (
          <div
            key={index}
            className={
              !(index % 2) ? `${styles.card}` : `${styles.card} ${styles.left}`
            }
          >
            <div className={styles.headline}>
              <div className={styles.featured}>featured project</div>
              <h3>{el.name}</h3>
            </div>
            <div className={styles.content}>
              <div className={styles.image_container}>
                <img
                  src={images[index]}
                  alt={el.name}
                  className={styles.image}
                />
                <span></span>
              </div>
              <div className={styles.infos}>
                <div className={styles.description}>
                  <p>{el.description}</p>
                  <div className={styles.icons}>
                    {el.url && (
                      <a href={el.url} target="_blank" rel="noreferrer">
                        <HiOutlineExternalLink />
                      </a>
                    )}
                    <a href={el.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className={styles.tags}>
                  {el.tags.map((elem, index2) => {
                    return <p key={index2}>{elem}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
