import React, { useState } from "react";
import styles from "./SkillList.module.css";
import skilllist from "./SkillList_object.json";
import { AiFillCaretRight } from "react-icons/ai";

function SkillList() {
  const [skills, setSkills] = useState(skilllist);

  return (
    <div className={styles.container}>
      {skills.map((el, index) => {
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
