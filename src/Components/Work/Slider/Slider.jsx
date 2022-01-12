import React, { useState } from "react";
import styles from "./Slider.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
const Slider = ({ HandleSlider, opacity, visibility, images }) => {
  let [index, setIndex] = useState(0);
  if (images && images.length > 0)
    return (
      <section className={styles.main_section} style={{ opacity, visibility }}>
        <div className={styles.close_div}>
          <AiOutlineClose
            onClick={HandleSlider}
            fill="white"
            className={styles.close_icon}
          />
        </div>
        <div className={styles.slider_container}>
          <div
            className={styles.prev_arrow}
            onClick={() =>
              setIndex(index !== 0 ? index - 1 : images.length - 1)
            }
          >
            <BsArrowLeft />
          </div>
          <div className={styles.image_div}>
            <h3 className={styles.image_heading}>{images[index].heading}</h3>
            <img src={images[index].img} alt="img" />
          </div>
          <div
            className={styles.next_arrow}
            onClick={() =>
              setIndex(index !== images.length - 1 ? index + 1 : 0)
            }
          >
            <BsArrowRight />
          </div>
        </div>
      </section>
    );
  else return null;
};

export default Slider;
