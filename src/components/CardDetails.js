import React from "react";
import { Link } from "react-router-dom";
import youtube from "../youtube.svg";
import wiki from "../wikipedia-logo.svg";
const CardDetails = props => {
  // console.log(props.core_serial.core_serial);
  return (
    <div className="main-card-details">
      <div className="card-img-details">
        <img src={props.patch_url} className="patch" alt="mission patch" />
      </div>

      <div className="card-details-details">
        <p>
          {/* Flight Name: {props.name} */}
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
