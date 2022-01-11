import React from "react";
import { BsTriangle, BsCircle, BsSquare, BsSlashLg } from "react-icons/bs";
import styles from "../Home.module.css";
const Background = ({ x, y }) => {
  return (
    <div className={styles.icon_div}>
      <BsCircle
        style={{
          left: "10%",
          top: "10%",
          color: "#FFD15C",
          transform: `translate(${x}px,${y}px)`,
        }}
      />
      <BsTriangle
        style={{
          left: " 25%",
          top: " 30%",
          color: "#FF4C60",
          transform: `translate(${x}px,${y}px)`,
        }}
      />
      <BsSquare
        style={{
          right: "10%",
          top: "10%",
          color: "#FF4C60",
          transform: `translate(${x}px,${y}px)`,
          //   transform: "rotate(30deg)",
        }}
      />
      <BsCircle
        style={{
          left: "15%",
          bottom: "30%",
          color: "#44D7B6",
          transform: `translate(${x}px,${y}px)`,
        }}
      />
      <BsSlashLg
        style={{
          bottom: "10%",
          left: "10%",
          color: "#FFD15C",
          transform: `translate(${x}px,${y}px)`,
        }}
      />
      <BsSlashLg
        style={{
          left: "45%",
          top: "10%",
          color: "#6C6CE5",
          transform: `translate(${x}px,${y}px)`,
          //   transform: "rotate(90deg)",
        }}
      />
      <BsSquare
        style={{
          left: "40%",
          bottom: "10%",
          color: "#FF4C60",
          transform: `translate(${x}px,${y}px)`,
        }}
      />
      <BsTriangle
        style={{
          right: " 30%",
          top: " 20%",
          color: "#FFD15C",
          transform: `translate(${x}px,${y}px)`,
          //   transform: "rotate(180deg)",
        }}
      />
      <BsSlashLg
        style={{
          right: "30%",
          bottom: "20%",
          color: "#6C6CE5",
          transform: `translate(${x}px,${y}px)`,
          //   transform: "rotate(90deg)",
        }}
      />
      <BsCircle
        style={{
          top: "45%",
          right: "20%",
          color: "#44D7B6",
          transform: `translate(${x}px,${y}px)`,
        }}
      />
      <BsSquare
        style={{
          right: "10%",
          bottom: "10%",
          color: "#FFD15C",
          transform: `translate(${x}px,${y}px)`,
        }}
      />{" "}
    </div>
  );
};

export default Background;
