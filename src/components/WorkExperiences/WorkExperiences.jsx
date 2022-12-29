import React, { useEffect, useState } from "react";
import styles from "./WorkExperiences.module.css";
import workexp from "./WorkExp_object.json";

function WorkExperiences() {
  const [experiences, setExperiences] = useState(workexp);
  const [selected, setSelected] = useState(workexp.length - 1);

  function handleClick(index) {
    setSelected(index);
  }

  return (
    <div className={styles.container}>
      <div className={styles.exp_container}>
        {experiences.map((el, index) => {
          return (
            <p
              key={index}
              className={`${styles.exp_name} ${
                index === selected && styles.selected
              }`}
              onClick={(event) => handleClick(index)}
            >
              {el.name}
            </p>
          );
        })}
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>
          {experiences[selected].name} @{" "}
          <span className={styles.company}>
            {experiences[selected].company}
          </span>
        </h3>
        <p className={styles.duration}>{experiences[selected].duration}</p>
        <p className={styles.description}>
          {experiences[selected].description}
        </p>
      </div>
    </div>
  );
}

export default WorkExperiences;
