import React from "react";
import FadeIn from "../../components/FadeIn/FadeIn";
import ProjectArchiveCards from "../../components/ProjectArchiveCards/ProjectArchiveCards";
import projects from "../../components/ProjectCards/Projects_object.json";
import styles from "./ProjectArchive.module.css";

function ProjectArchive() {
  return (
    <div className={styles.container}>
      <FadeIn>
        <p>view the archive</p>
        <h2>More Noteworthy Projects</h2>{" "}
      </FadeIn>
      <FadeIn>
        <div className={styles.card_container}>
          {projects.slice(3).map((el, id) => {
            return <ProjectArchiveCards archived={el} />;
          })}
        </div>
      </FadeIn>
    </div>
  );
}

export default ProjectArchive;
