import React from "react";
import styles from "./Experience.module.css";
import { Fade } from "react-reveal";
import {
  academic_record,
  programming_record,
} from "../../Resources/ExperienceData";
const Experience = () => {
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>Experience</h1>
      </Fade>
      <div className={styles.container}>
        <div className={`${styles.academic_record} ${styles.container_div}`}>
          {academic_record.map((val) => (
            <Fade bottom key={val.date}>
              <div className={styles.record_container}>
                <div className={styles.record}>
                  <small style={{ color: "#8b88b1" }}>{val.date}</small>
                  <h3>{val.type}</h3>
                  <p>{val.institute}</p>
                </div>
              </div>
            </Fade>
          ))}
          <span className={styles.line}></span>
        </div>
        <div
          className={`${styles.programming_record}  ${styles.container_div}`}
        >
          {programming_record.map((val) => (
            <Fade bottom key={val.type}>
              <div className={styles.record_container} key={val.date}>
                <div className={styles.record2}>
                  <small style={{ color: "#8b88b1" }}>{val.date}</small>
                  <h3>{val.type}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </Fade>
          ))}
          <span className={styles.line}></span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
