import React from "react";
import PropTypes from "prop-types";
import CardDetails from "../components/CardDetails/CardDetails";
import utils from "../utils";
import "./Mission.css";

const Mission = ({ data, match }) => {
  // let name = propps.match.params.name;
  let name = match.params.name;

  let selectedMission = data.filter(d => {
    return utils.removeForwardSlash(d.mission_name) === name;
  });

  let cards = selectedMission.map((element, index) => {
    return (
      <CardDetails
        key={index}
        patch_url={element.links.mission_patch_small}
        number={utils.addLeadingZero(element.flight_number)}
        name={utils.removeForwardSlash(element.mission_name)}
        date={utils.formatDate(element.launch_date_local)}
        site={element.launch_site.site_name_long}
        rocketName={element.rocket.rocket_name}
        rocketType={element.rocket.rocket_type}
        details={utils.isDetailsNull(element.details)}
        youtube_url={element.links.video_link}
        wiki_url={element.links.wikipedia}
      />
    );
  });

  return <div className="container">{cards}</div>;
};

export default Mission;

Mission.propTypes = {
  data: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};
