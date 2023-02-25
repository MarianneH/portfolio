import styles from "./Buttons.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

function Button({ button_text, icon, handleClick }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {icon === "mail" && <AiOutlineMail className={styles.icon} />}
      {icon === "download" && <BsDownload className={styles.icon} />}
      {button_text}
    </button>
  );
}

export default Button;
