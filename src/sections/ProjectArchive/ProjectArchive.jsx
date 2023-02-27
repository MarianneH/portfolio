import React from "react";
import ProjectArchiveCards from "../../components/ProjectArchiveCards/ProjectArchiveCards";
import projects from "../../components/ProjectCards/Projects_object.json";
import styles from "./ProjectArchive.module.css";

function ProjectArchive() {
  return (
    <div>
      <div className={styles.card_container}>
        {projects.slice(3).map((el, id) => {
          return <ProjectArchiveCards archived={el} />;
        })}
      </div>
    </div>
  );
}

export default ProjectArchive;
