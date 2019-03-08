import React from "react";
import styles from "./Patch.module.css";
import PropTypes from "prop-types";

const Patch = ({ patch_url }) => {
  return (
    <div className={styles.img}>
      <img src={patch_url} alt="mission patch" />
    </div>
  );
};

export default Patch;

Patch.propTypes = {
  patch_url: PropTypes.string.isRequired
};
