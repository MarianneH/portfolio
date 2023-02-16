import styles from "./Button.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

function Button({ button_text, icon, handleEmailClick }) {
  return (
    <button className={styles.button} onClick={handleEmailClick}>
      {icon === "mail" && <AiOutlineMail className={styles.icon} />}
      {icon === "download" && <BsDownload className={styles.icon} />}
      {button_text}
    </button>
  );
}

export default Button;
