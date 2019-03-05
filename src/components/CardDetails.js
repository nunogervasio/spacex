import React from "react";
import PropTypes from "prop-types";
import youtube from "../img/youtube.svg";
import wiki from "../img/wikipedia-logo.svg";
const CardDetails = props => {
  return (
    <div className="main-card-details">
      <div className="card-img-details">
        <img src={props.patch_url} className="patch" alt="mission patch" />
      </div>

      <div className="card-details-details">
        <p>
          <span className="flight-name">{props.name}</span>
          <br />
          <span className="card-location">Flight Number: </span>
          {props.number}
          <br />
          <span className="card-date-time">Date:</span> {props.date}
          <br />
          <span className="card-location">Location:</span> {props.site}
          <br />
          <span className="card-location">Rocket Name:</span> {props.rocketName}
          <br />
          <span className="card-location">Rocket Type:</span> {props.rocketType}
          <br />
          {/****** TODO: return "no details available" when there are no details */}
          <span className="card-location">Mission Details: </span>
          {props.details}
          <br />
        </p>

        <div className="links">
          <div className="card-location">
            <a href={props.youtube} target="_blank" rel="noopener noreferrer">
              {/****** TODO: line up img next to text 'youtube video' */}
              {/* <img src={youtube} /> */}
              <span className="youtube">YouTube Video</span>
            </a>
          </div>
          <div className="card-location">
            <a href={props.wiki} target="_blank" rel="noopener noreferrer">
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
  key: PropTypes.number.isRequired,
  patch_url: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rockeType: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired
};
