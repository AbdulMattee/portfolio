import React, { useState } from "react";
import styles from "./Home.module.css";
import Type from "./Type/Type.jsx";
import { Fade } from "react-reveal";
import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import Background from "./Background/Background";
const Home = () => {
  let contacts = [
    { link: "https://github.com/AbdulMattee/", icon: <BsGithub /> },
    {
      link: "https://www.linkedin.com/in/abdul-mattee123",
      icon: <BsLinkedin />,
    },
    { link: "https://www.instagram.com/mattee_xd/", icon: <BsInstagram /> },
    {
      link: "https://www.facebook.com/profile.php?id=100009095508375",
      icon: <BsFacebook />,
    },
    {
      link: "https://api.whatsapp.com/send?phone=923065401047",
      icon: <BsWhatsapp />,
    },
  ];
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const HandleIconMovement = (event) => {
    setX(-event.pageX * 0.03);
    setY(-event.pageY * 0.03);
  };
  return (
    <section className={styles.main_section} onMouseMove={HandleIconMovement}>
      <Background x={x} y={y} />
      <main className={styles.container}>
        <div className={styles.img_container}>
          <img src={require("../../assets/Dp.jpg")} alt="DP" />
        </div>
        <Fade bottom>
          <h1>Abdul Mattee</h1>
        </Fade>
        <Type />
        <div className={styles.contact_div}>
          {contacts.map((val, index) => (
            <a
              href={val.link}
              target="_blank"
              className={styles.links}
              key={index}
              rel="noreferrer"
            >
              {val.icon}
            </a>
          ))}
        </div>
        <div className={styles.btn_div}>
          <button
            className={styles.hire_btn}
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            Hire Me
          </button>
        </div>
      </main>
    </section>
  );
};

export default Home;
