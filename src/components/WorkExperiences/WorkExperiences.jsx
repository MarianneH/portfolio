import React, { useState } from "react";
import styles from "./WorkExperiences.module.css";
import workexp from "./WorkExp_object.json";

function WorkExperiences() {
  const [experiences, setExperiences] = useState(workexp);
  const [selected, setSelected] = useState(workexp.length - 1);

  function handleClick(index) {
    console.log(index);
  }
  return (
    <div className={styles.exp_container}>
      {experiences.map((el, index) => {
        return (
          <p
            key={index}
            className={styles.exp_name}
            onClick={(event) => handleClick(index)}
          >
            {el.name}
          </p>
        );
      })}
    </div>
  );
}

export default WorkExperiences;
