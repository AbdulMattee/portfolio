import React, { useState } from "react";
import styles from "./About.module.css";
import { Line } from "rc-progress";
import { Fade } from "react-reveal";
const About = () => {
  let progress = [
    { progress: 95, heading: "React Js", color: "rgb(255 209 92)" },
    { progress: 90, heading: "Next Js", color: "rgb(255 76 96)" },
    {
      progress: 95,
      heading: "Front-End Development",
      color: "rgb(108 108 229)",
    },
  ];
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>About me</h1>
      </Fade>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img src={require("../Home/Dp.jpg")} alt="dp" />
        </div>
        <div className={styles.about_container}>
          <div className={styles.about_cv_container}>
            <p>
              I am Abdul Mattee, web developer from Lahore, Pakistan. I have
              rich experience in building and customizing impressive and
              dazzling Website Front-end using React Js, also I am good at Next
              Js.
            </p>
            <div className={styles.btn_div}>
              <button className={styles.cv_btn}>Download CV</button>
            </div>
          </div>
          <div className={styles.about_progress_container}>
            {progress.map((val) => (
              <div key={val.heading}>
                <div className={styles.progress_name}>
                  <p>{val.heading}</p> <p>{val.progress}%</p>
                </div>
                <Line
                  strokeColor={val.color}
                  strokeWidth="1.5"
                  trailWidth="1.5"
                  percent={val.progress}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
