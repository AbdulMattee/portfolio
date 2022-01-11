import React, { useState } from "react";
import { Fade } from "react-reveal";
import styles from "./Service.module.css";
const Service = () => {
  let services = [
    {
      type: "Front-End Development",
      description:
        "Developing your website front-end with advance technology e.g React,Next.",
      color: "rgb(249 215 76)",
      img: "./web.webp",
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Full Stack Development",
      description:
        "MEAN or MERN stack development to make your website super fast and much more advance. ",
      color: "rgb(108 108 229)",
      img: "./fullstack.png",
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Website Backend",
      description:
        "Building your website backend with Node Js, PHP or Laravel.",
      color: "rgb(249 123 139)",
      img: "./backend.png",
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },
  ];
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>Services</h1>
      </Fade>
      <div className={styles.container}>
        {services.map((val) => (
          <div
            className={styles.service}
            style={{ background: val.color, boxShadow: val.boxShadow }}
            key={val.type}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.img_container}>
                <img src={require(`${val.img}`)} alt={val.type} />
              </div>
            </div>
            <div className={styles.description}>
              <h3>{val.type}</h3>
              <p>{val.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p style={{ margin: "15px 0" }}>
        Looking for a custom job?{" "}
        <a href="mailto:abdulmattee123@gmail.com" style={{ color: "white" }}>
          Email me{" "}
        </a>
      </p>
      <div className={styles.btn_div}>
        <button className={styles.load_btn}>Load More</button>
      </div>
    </section>
  );
};

export default Service;
