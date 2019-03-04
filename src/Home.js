import React from "react";
import Card from "./components/Card";
import utils from "./utils";

const Home = props => {
  let filteredData = props.data.filter(d => {
    return d.upcoming === false;
  });

  let cards = filteredData.map((element, index) => {
    return (
      <Card
        key={index}
        patch_url={element.links.mission_patch_small}
        number={utils.addLeadingZero(element.flight_number)}
        name={element.mission_name}
        year={element.launch_year}
        date={utils.formatDate(element.launch_date_local)}
        site={element.launch_site.site_name_long}
        details={element.details}
        core_serial={element.rocket.first_stage.cores[0]}
      />
    );
  });
  return <div className="container">{cards}</div>;
};

export default Home;
