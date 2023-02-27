import React from "react";
import FadeIn from "../../components/FadeIn/FadeIn";
import Headlines from "../../components/Headlines/Headlines";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

export default function Projects() {
  return (
    <div id="projects">
      <FadeIn>
        <Headlines headline_text="Projects" number="02." />
      </FadeIn>
      <ProjectCards />
    </div>
  );
}
