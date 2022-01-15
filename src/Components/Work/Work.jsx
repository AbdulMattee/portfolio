import React, { useState } from "react";
import styles from "./Work.module.css";
import { Fade } from "react-reveal";
import { FiLink } from "react-icons/fi";
import { GrImage } from "react-icons/gr";
import Slider from "./Slider/Slider";
import { work } from "../../Resources/WorkData";
const Work = () => {
  const [images, setImages] = useState([]);
  const [sliderOpacity, setSliderOpacity] = useState(0);
  const [sliderVisibility, setSliderVisibility] = useState("hidden");
  const [index, setIndex] = useState(-1);
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
            onMouseOver={() => setIndex(ind)}
          >
            <div className={styles.main_item}>
              <p style={{ fontFamily: "Cinzel Decorative,san-serif" }}>
                {val.name}
              </p>
            </div>

            <div
              className={styles.link_div}
              style={{
                visibility: ind === index ? "visible" : "hidden",
                opacity: ind === index ? 1 : 0,
              }}
              onMouseOut={() => setIndex(-1)}
            >
              <div className={styles.inner_link_div}>
                <div
                  style={{
                    transform: `translateY(${ind === index ? "0" : "15px"})`,
                    opacity: ind === index ? 1 : 0,
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
