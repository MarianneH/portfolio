import React, { useEffect, useState } from "react";
import styles from "./WorkExperiences.module.css";
import workexp from "./WorkExp_object.json";

function WorkExperiences() {
  const [experiences, setExperiences] = useState(workexp);
  const [selected, setSelected] = useState(workexp.length - 1);
  const [text, setText] = useState(null);

  function handleClick(index) {
    setSelected(index);
  }

  useEffect(() => {
    setText(experiences[selected].description);
  }, [selected, experiences]);
  return (
    <div className={styles.container}>
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
      <p className={styles.description}>{text}</p>
    </div>
  );
}

export default WorkExperiences;
