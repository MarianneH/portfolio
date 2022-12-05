import styles from "./button.module.css";

export function Button({ button_text }) {
  return <button className={styles.button}>{button_text}</button>;
}
