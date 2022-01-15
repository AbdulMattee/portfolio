import React from "react";
import { Fade } from "react-reveal";
import styles from "./Service.module.css";
import { services } from "../../Resources/ServicesData";
const Service = () => {
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>Services</h1>
      </Fade>
      <div className={styles.container}>
        {services.map((val, ind) => {
          return (
            <div
              className={styles.service}
              style={{
                background: val.color,
                boxShadow: val.boxShadow,
              }}
              key={val.type}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.img_container}>
                  <img src={val.img} alt={val.type} />
                </div>
              </div>
              <div className={styles.description}>
                <h3
                  style={{ textAlign: "center" }}
                  className={styles.service_heading}
                >
                  {val.type}
                </h3>
                <p className={styles.service_description}>{val.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ margin: "15px 0" }} className={styles.custom_p}>
        Looking for a custom job?{" "}
        <a href="mailto:abdullahqayyum878@gmail.com" style={{ color: "white" }}>
          Email me{" "}
        </a>
      </p>
    </section>
  );
};

export default Service;
