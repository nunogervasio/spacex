import React from "react";
import { Link } from "react-router-dom";
import roverImg from "../../img/mars-rover.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className={styles.flex_wrapper}>
          <h1 className={styles.name}>SpaceX - API</h1>
          <img src={roverImg} alt="mars rover" className={styles.header_img} />
        </div>
      </Link>
    </header>
  );
};

export default Header;
