import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";
import { Fade } from "react-reveal";
const Experience = () => {
  let academic_record = [
    {
      type: "Bachelor's Degree",
      date: "2019-Present",
      institute: "University of the Punjab, Lahore, Pakistan",
    },
    {
      type: "College Degree",
      date: "2017-2019",
      institute: "Punjab Group of Colleges, Lahore, Pakistan",
    },
    {
      type: "Academic Degree",
      date: "2015-2017",
      institute: "Dua Academy, Lahore, Pakistan",
    },
  ];
  let programming_record = [
    {
      type: "React Js Developer",
      date: "2021 - Present",
      description: "Vanilla Javascript, React Js, React-Bootstrap, Ant Design.",
    },
    {
      type: "Next Js Developer",
      date: "2021 - Present",
      description: "Next Js, Server Side Rendering, Dynamic Routing",
    },
    {
      type: "Web Designer",
      date: "2019 - Present",
      description: "HTML5, CSS, Bootstrap,Tailwind.",
    },
  ];
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
