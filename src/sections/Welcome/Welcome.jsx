import Button from "../../components/Button/Button";
import styles from "./welcome.module.css";

function Welcome() {
  return (
    <div className={styles.container}>
      <div>Hi there &#128075;, my name is</div>
      <div>Marianne Helbig</div>
      <div>I'm a Junior Web Developer building things for the web</div>

      <Button button_text="Get in touch" />
    </div>
  );
}
export default Welcome;
