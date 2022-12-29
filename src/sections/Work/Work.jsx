import React from "react";
import Headlines from "../../components/Headlines/Headlines";
import WorkExperiences from "../../components/WorkExperiences/WorkExperiences";
import styles from "./work.module.css";

export default function Work() {
  return (
    <div>
      <Headlines headline_text="Work Experience" />
      <WorkExperiences />
    </div>
  );
}
