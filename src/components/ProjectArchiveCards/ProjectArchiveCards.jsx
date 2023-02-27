import React from "react";
import Tags from "../Tags/Tags";
import styles from "./ProjectArchiveCards.module.css";
import { SlFolder } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectArchiveCards({ archived }) {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <SlFolder className={styles.folder} />
        <div>
          {archived.url && (
            <a
              href={archived.url}
              className={styles.icon}
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineExternalLink />
              <span className={styles.visible_hidden}>Website</span>
            </a>
          )}
          <a
            className={styles.icon}
            href={archived.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.socials} />
            <span className={styles.visible_hidden}>GitHub</span>
          </a>
        </div>
      </div>
      <div className={styles.project_details}>
        <h3>{archived.name}</h3>
        <p>{archived.short_descr}</p>
        <Tags tags={archived.tags} />
      </div>
    </div>
  );
}

export default ProjectArchiveCards;
