import React, { useState, useEffect } from "react";
import styles from "./Work.module.css";
import { Fade } from "react-reveal";
import { FiLink } from "react-icons/fi";
import { GrImage } from "react-icons/gr";
import Slider from "./Slider/Slider";
const Work = () => {
  let work = [
    {
      type: "Front-End Development",
      description: "Front-end was developed by me.",
      name: "A&B STORE",
      link: "https://ab-store.kingcobbler.store/",
      images: [
        {
          img: require("../../assets/Work/work1/home.webp"),
          heading: "Home Page",
        },
        {
          img: require("../../assets/Work/work1/about.webp"),
          heading: "About Page",
        },
        {
          img: require("../../assets/Work/work1/contact.webp"),
          heading: "Contact Page",
        },
        {
          img: require("../../assets/Work/work1/faq.webp"),
          heading: "FAQ Page",
        },
        {
          img: require("../../assets/Work/work1/productpage.webp"),
          heading: "Product Page",
        },
      ],
    },
  ];

  const [visibility, setVisibility] = useState("hidden");
  const [opacity, setOpacity] = useState(0);
  const [images, setImages] = useState([]);
  const [translate, setTranslate] = useState("15px");
  const [sliderOpacity, setSliderOpacity] = useState(0);
  const [sliderVisibility, setSliderVisibility] = useState("hidden");
  const ShowLinks = () => {
    setVisibility("visible");
    setOpacity(1);
    setTranslate("0px");
  };
  const HideLinks = () => {
    setVisibility("hidden");
    setOpacity(0);
    setTranslate("15px");
  };
  const HandleSlider = (display, images) => {
    setImages(images);
    setSliderVisibility(display === "show" ? "visible" : "hidden");
    setSliderOpacity(display === "show" ? 1 : 0);
  };
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>Recent Works</h1>
      </Fade>

      <div className={styles.container}>
        {work.map((val, ind) => (
          <div
            key={ind}
            className={styles.item}
            onMouseOver={ShowLinks}
            onMouseOut={HideLinks}
          >
            <div className={styles.main_item}>
              <p style={{ fontFamily: "Cinzel Decorative,san-serif" }}>
                {val.name}
              </p>
            </div>
            <div className={styles.link_div} style={{ visibility, opacity }}>
              <div className={styles.inner_link_div}>
                <div
                  style={{
                    transform: `translateY(${translate})`,
                    opacity,
                  }}
                  className={styles.inner_link_div2}
                >
                  {val.description}
                </div>
                <div className={styles.links}>
                  {val.link && (
                    <div className={styles.link}>
                      <a
                        href={val.link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.url}
                      >
                        <FiLink />
                      </a>
                    </div>
                  )}
                  {val.images && val.images.length > 0 && (
                    <div
                      className={styles.link}
                      onClick={() => HandleSlider("show", val.images)}
                    >
                      <GrImage />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Slider
        HandleSlider={HandleSlider}
        opacity={sliderOpacity}
        visibility={sliderVisibility}
        images={images}
      />
    </section>
  );
};

export default Work;
