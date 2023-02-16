import Button from "../../components/Button/Button";
import styles from "./Outro.module.css";

function Outro() {
  function handleEmailClick(e) {
    e.preventDefault();
    window.location.href = "mailto:marianne.helbig@googlemail.com";
  }
  return (
    <div className={styles.container}>
      <h3>and now?</h3>
      <h2>Get in touch</h2>
      <p>
        Currently I'm actively looking for my first web developer position and
        I'm also happy to connect regardless. Please reach out, if that sounds
        good to you.
      </p>
      <Button
        button_text="Say hi!"
        icon="mail"
        handleEmailClick={handleEmailClick}
      />
    </div>
  );
}
export default Outro;
