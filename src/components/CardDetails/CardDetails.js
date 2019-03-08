import React from "react";
import PropTypes from "prop-types";
import youtubeImg from "../../img/youtube-1.svg";
import wikiImg from "../../img/wiki-1.svg";
import Patch from "../Patch/Patch";
import Links from "../Links/Links";
import styles from "./CardDetails.module.css";

const CardDetails = ({
  patch_url,
  number,
  name,
  date,
  site,
  rocketName,
  rocketType,
  details,
  youtube_url,
  wiki_url
}) => {
  console.log({ name });
  return (
    <div className={styles.card}>
      <Patch patch_url={patch_url} />
      <div className={styles.details}>
        <p>
          <span className={styles.flight_name}>{name}</span>
          <br />
          <strong>Flight Number:</strong> {number}
          <br />
          <strong>Date:</strong> {date}
          <br />
          <strong>Location:</strong> {site}
          <br />
          <strong>Rocket Name:</strong> {rocketName}
          <br />
          <strong>Rocket Type:</strong> {rocketType}
          <br />
          <strong>Mission Details:</strong> {details}
        </p>
        <Links
          youtube_url={youtube_url}
          youtubeImg={youtubeImg}
          wiki_url={wiki_url}
          wikiImg={wikiImg}
        />
      </div>
    </div>
  );
};

export default CardDetails;

CardDetails.propTypes = {
  patch_url: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketType: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  youtube_url: PropTypes.string.isRequired,
  wiki_url: PropTypes.string.isRequired
};
