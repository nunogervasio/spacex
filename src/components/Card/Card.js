import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ patch_url, name }) => {
  return (
    <Link to={`/mission/${name}`}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={patch_url} className={styles.patch} alt="mission patch" />
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  patch_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
