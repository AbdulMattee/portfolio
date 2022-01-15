import React from "react";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";
import { nav_list } from "../../Resources/NavbarData";
const Navbar = ({ name, NavigateTo }) => {
  const isMobile = useMediaQuery({ maxWidth: "1049px" });
  return (
    !isMobile && (
      <section className={styles.main_section}>
        <div className={styles.container}>
          <h1 className={styles.my_name}>Mattee</h1>
          <ul className={styles.nav_list}>
            {nav_list.map((val) => (
              <li className={styles.nav_item} key={val.name}>
                <span className={styles.nav_icon}>{val.icon}</span>
                <span
                  className={styles.nav_name}
                  style={{ color: val.name === name ? "#ffd15c" : "#ffff" }}
                  onClick={() => NavigateTo(val.name)}
                >
                  {val.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
};

export default Navbar;
