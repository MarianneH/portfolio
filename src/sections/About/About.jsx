import styles from "./about.module.css";
import Headlines from "../../components/Headlines/Headlines";
import SkillList from "../../components/SkillList/SkillList";

function About() {
  return (
    <div className={styles.container}>
      <Headlines headline_text="About" number="01." id="about" />
      <div className={styles.content}>
        <p>
          Hi! I am Marianne Helbig and I enjoy learning and building new things.
          I am currently enrolled in the a 20 week Web Developer Program at the{" "}
          <a
            className="highlight"
            href="https://www.wildcodeschool.com/en-GB"
            target="_blank"
            rel="noreferrer"
          >
            Wild Code School
          </a>{" "}
          and will finish the course mid February 2023.
        </p>
        <p>
          Previously I've been working as a Senior Product Manager at{" "}
          <a
            className="highlight"
            href="https://www.misterspex.de/"
            target="_blank"
            rel="noreferrer"
          >
            Mister Spex
          </a>{" "}
          and am now seeking the opportunity to switch careers. I am a
          supportive and enthusiastic team player with the willingness to
          contribute quickly, learn about new technologies and with great
          communication, time- and project management skills.
        </p>
        <div className={styles.list}>
          <p>These are the technologies that I've been working with:</p>
          <SkillList />
        </div>
      </div>
    </div>
  );
}
export default About;
