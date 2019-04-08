import React from "react";
import PropTypes from "prop-types";
import Card from "../components/Card/Card";
import { removeForwardSlash } from "../utils";
import styles from "./Home.module.css";

const Home = ({ data }) => {
  let filteredData = data.filter(d => {
    return d.upcoming === false;
  });

  let cards = filteredData.map((element, index) => {
    return (
      <Card
        key={index}
        patch_url={element.links.mission_patch_small}
        name={removeForwardSlash(element.mission_name)}
      />
    );
  });

  return <div className={styles.container}>{cards}</div>;
};

export default Home;

Home.propTypes = {
  data: PropTypes.array.isRequired
};
