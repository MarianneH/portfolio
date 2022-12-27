import styles from "./Button.module.css";

function Button({ button_text }) {
  return <button className={styles.button}>{button_text}</button>;
}

export default Button;
