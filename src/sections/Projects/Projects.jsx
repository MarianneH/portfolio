import React from "react";
import Headlines from "../../components/Headlines/Headlines";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

export default function Projects() {
  return (
    <div id="projects">
      <Headlines headline_text="Projects" number="02." />
      <ProjectCards />
    </div>
  );
}
