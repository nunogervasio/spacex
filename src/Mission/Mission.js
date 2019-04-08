import React from "react";
import PropTypes from "prop-types";
import CardDetails from "../components/CardDetails/CardDetails";
import {
  addLeadingZero,
  removeForwardSlash,
  formatDate,
  isDetailsNull
} from "../utils";
import styles from "./Mission.module.css";

const Mission = ({ data, match }) => {
  let name = match.params.name;

  let selectedMission = data.filter(d => {
    return removeForwardSlash(d.mission_name) === name;
  });

  let cards = selectedMission.map((element, index) => {
    return (
      <CardDetails
        key={index}
        patch_url={element.links.mission_patch_small}
        number={addLeadingZero(element.flight_number)}
        name={removeForwardSlash(element.mission_name)}
        date={formatDate(element.launch_date_local)}
        site={element.launch_site.site_name_long}
        rocketName={element.rocket.rocket_name}
        rocketType={element.rocket.rocket_type}
        details={isDetailsNull(element.details)}
        youtube_url={element.links.video_link}
        wiki_url={element.links.wikipedia}
      />
    );
  });

  return <div className={styles.container}>{cards}</div>;
};

export default Mission;

Mission.propTypes = {
  data: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};
