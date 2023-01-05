import Button from "../../components/Button/Button";
import styles from "./welcome.module.css";

function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome_text}>
        <p className={styles.salutation}>Hi there &#128075;, my name is</p>
        <h1 className={styles.name}>Marianne Helbig.</h1>
        <h2 className={styles.main_tag}>
          I'm a <span>Junior Web Developer</span> building things for the web.
        </h2>
      </div>

      <Button button_text="Get in touch!" />
    </div>
  );
}
export default Welcome;
