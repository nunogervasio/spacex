import React from "react";
import PropTypes from "prop-types";
import Card from "../components/Card/Card";
import utils from "../utils";
import "./Home.css";

const Home = ({ data }) => {
  let filteredData = data.filter(d => {
    return d.upcoming === false;
  });

  let cards = filteredData.map((element, index) => {
    return (
      <Card
        key={index}
        patch_url={element.links.mission_patch_small}
        number={utils.addLeadingZero(element.flight_number)}
        name={utils.removeForwardSlash(element.mission_name)}
        date={utils.formatDate(element.launch_date_local)}
        site={element.launch_site.site_name_long}
      />
    );
  });

  return <div className="container">{cards}</div>;
};

export default Home;

Home.propTypes = {
  data: PropTypes.array.isRequired
};
