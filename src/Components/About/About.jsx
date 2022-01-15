import React from "react";
import styles from "./About.module.css";
import { Line } from "rc-progress";
import { Fade } from "react-reveal";
import { progress } from "../../Resources/AboutData";
const About = () => {
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>About me</h1>
      </Fade>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img src={require("../../assets/Dp.jpg")} alt="dp" />
        </div>
        <div className={styles.about_container}>
          <div className={styles.about_cv_container}>
            <p>
              I am Abdul Mattee, web developer from Lahore, Pakistan. I have
              rich experience in building and customizing impressive and
              dazzling Website Front-end using React Js, or with Next Js.
            </p>
            <div className={styles.btn_div}>
              <a href={require("../../assets/CV.pdf")}>
                <button className={styles.cv_btn}>Download CV</button>
              </a>
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
