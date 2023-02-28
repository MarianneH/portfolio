import Button from "../../components/Button/Button";
import styles from "./welcome.module.css";
import Typewriter from "typewriter-effect";

function Welcome() {
  function handleEmailClick(e) {
    e.preventDefault();
    window.location.href = "mailto:marianne.helbig@googlemail.com";
  }
  return (
    <div className={styles.container}>
      <div className={styles.welcome_text}>
        <p className={styles.salutation}>Hi there &#128075;, my name is</p>
        <h1 className={styles.name}>Marianne Helbig.</h1>
        <div className={styles.main_container}>
          <h2 className={styles.main_tag}>
            I'm a <span className={styles.highlight}>Junior Web Developer</span>{" "}
            <Typewriter
              options={{
                strings: [
                  "open to work.",
                  "and former Product Manager.",
                  "based in Berlin.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
      <Button
        button_text="Get in touch!"
        icon="mail"
        handleClick={handleEmailClick}
      />
    </div>
  );
}
export default Welcome;
