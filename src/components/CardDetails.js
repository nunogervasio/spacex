import React from "react";
import PropTypes from "prop-types";
import youtube from "../img/youtube.svg";
import wiki from "../img/wikipedia-logo.svg";
const CardDetails = ({
  patch_url,
  number,
  name,
  date,
  site,
  rocketName,
  rocketType,
  details,
  youtube,
  wiki
}) => {
  return (
    <div className="main-card-details">
      <div className="card-img-details">
        <img src={patch_url} className="patch" alt="mission patch" />
      </div>

      <div className="card-details-details">
        <p>
          <span className="flight-name">{name}</span>
          <br />
          <span className="card-location">Flight Number: </span> {number}
          <br />
          <span className="card-date-time">Date:</span> {date}
          <br />
          <span className="card-location">Location:</span> {site}
          <br />
          <span className="card-location">Rocket Name:</span> {rocketName}
          <br />
          <span className="card-location">Rocket Type:</span> {rocketType}
          <br />
          {/****** TODO: return "no details available" when there are no details 
          this also call a proptype error when details returns null*/}
          <span className="card-location">Mission Details: </span> {details}
          <br />
        </p>

        <div className="links">
          <div className="card-location">
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              {/****** TODO: line up img next to text 'youtube video' */}
              {/* <img src={youtube} /> */}
              <span className="youtube">YouTube Video</span>
            </a>
          </div>
          <div className="card-location">
            <a href={wiki} target="_blank" rel="noopener noreferrer">
              {/****** TODO: line up img next to text 'wikipedia page' */}
              {/* <img src={wiki} /> */}
              <span className="wiki">Wikipedia Page</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

CardDetails.propTypes = {
  patch_url: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketType: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired
};
