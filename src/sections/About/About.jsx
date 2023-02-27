import styles from "./about.module.css";
import Headlines from "../../components/Headlines/Headlines";
import SkillList from "../../components/SkillList/SkillList";
import IntroText from "./IntroText";
import FadeIn from "../../components/FadeIn/FadeIn";

function About() {
  return (
    <div className={styles.container} id="about">
      <FadeIn>
        <Headlines headline_text="About" number="01." />
        <div className={styles.content}>
          <IntroText />
          <div className={styles.list}>
            <p>These are the technologies that I've been working with:</p>
            <SkillList />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
export default About;
