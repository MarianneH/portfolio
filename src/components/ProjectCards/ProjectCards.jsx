import React from "react";
import styles from "./ProjectCards.module.css";
import projectsJson from "./Projects_object.json";
import travel from "../../assets/projects/travel_memory.png";
import regroup from "../../assets/projects/lets_regroup.png";
import comfort from "../../assets/projects/your_comfort_zone.png";
import appointment from "../../assets/projects/appointment_app.png";
import deliveryFee from "../../assets/projects/wolt_delivery_fee_calculator.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Tags from "../Tags/Tags";
import FadeIn from "../FadeIn/FadeIn";

function ProjectCard() {
  const images = [appointment, deliveryFee, travel, comfort, regroup];
  return (
    <div className={styles.container}>
      {projectsJson.slice(0, 3).map((el, index) => {
        return (
          <div
            key={index}
            className={
              !(index % 2) ? `${styles.card}` : `${styles.card} ${styles.left}`
            }
          >
            <FadeIn>
              <div className={styles.headline}>
                <div className={styles.featured}>featured project</div>
                <h3>{el.name}</h3>
              </div>
            </FadeIn>
            <FadeIn>
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
                          <span className={styles.visible_hidden}>Website</span>
                        </a>
                      )}
                      <a href={el.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                        <span className={styles.visible_hidden}>GitHub</span>
                      </a>
                    </div>
                  </div>
                  <Tags tags={el.tags} />
                </div>
              </div>
            </FadeIn>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
