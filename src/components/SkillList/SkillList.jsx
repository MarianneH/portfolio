import React, { useState } from "react";
import styles from "./SkillList.module.css";
import skilllist from "./SkillList_object.json";

function SkillList() {
  const [skills, setSkills] = useState(skilllist);

  return <div className={styles.container}>SkillList</div>;
}

export default SkillList;
