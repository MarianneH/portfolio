import styles from "./button.module.css";

function Button({ button_text }) {
  return <button className={styles.button}>{button_text}</button>;
}

export default Button;
