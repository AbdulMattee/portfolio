import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
const Navbar = () => {
  let nav_list = [
    { name: "home", icon: <MdOutlineHome /> },
    { name: "about", icon: <AiOutlineUser /> },
    { name: "services", icon: <BiBriefcase /> },
    { name: "experience", icon: <FaGraduationCap /> },
    { name: "works", icon: <FiLayers /> },
    { name: "contact", icon: <IoChatbubblesOutline /> },
  ];
  return (
    <section className={styles.main_section}>
      <div className={styles.container}>
        <h1 className={styles.my_name}>Mattee</h1>
        <ul className={styles.nav_list}>
          {nav_list.map((val) => (
            <li className={styles.nav_item} key={val.name}>
              <span className={styles.nav_icon}>{val.icon}</span>
              <span className={styles.nav_name}>{val.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
