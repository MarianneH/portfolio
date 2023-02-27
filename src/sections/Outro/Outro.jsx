import Button from "../../components/Button/Button";
import FadeIn from "../../components/FadeIn/FadeIn";
import Headlines from "../../components/Headlines/Headlines";
import styles from "./Outro.module.css";

function Outro() {
  function handleEmailClick(e) {
    e.preventDefault();
    window.location.href = "mailto:marianne.helbig@googlemail.com";
  }
  return (
    <div id="contact" className={styles.container}>
      <FadeIn>
        <Headlines headline_text="What now?" number="04." />
        <h2>Get in touch.</h2>
        <p>
          I am currently in search of my first web developer position and would
          be delighted to connect with you regardless. Please do not hesitate to
          reach out if this sounds appealing to you.
        </p>
        <Button
          button_text="Say hi!"
          icon="mail"
          handleClick={handleEmailClick}
        />
      </FadeIn>
    </div>
  );
}
export default Outro;
