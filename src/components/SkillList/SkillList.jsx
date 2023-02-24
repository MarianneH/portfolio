import React from "react";
import styles from "./SkillList.module.css";
import skillList from "./SkillList_object.json";
import { AiFillCaretRight } from "react-icons/ai";

function SkillList() {
  return (
    <div className={styles.container}>
      {skillList.map((el, index) => {
        return (
          <p key={index} className={styles.skill}>
            <AiFillCaretRight className={styles.icon} />
            {el.name}
          </p>
        );
      })}
    </div>
  );
}

export default SkillList;
