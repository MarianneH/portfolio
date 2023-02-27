import React from "react";
import FadeIn from "../../components/FadeIn/FadeIn";
import Headlines from "../../components/Headlines/Headlines";
import WorkExperiences from "../../components/WorkExperiences/WorkExperiences";
import styles from "./work.module.css";

export default function Work() {
  return (
    <div id="work" className={styles.container}>
      <FadeIn>
        <Headlines headline_text="Work Experience" number="03." />
        <WorkExperiences />
      </FadeIn>
    </div>
  );
}
