import React from "react";
import { Link } from "react-router-dom";

const CardDetails = props => {
  // console.log(props.core_serial.core_serial);
  return (
    <div className="main-card-details">
      <div className="card-img-details">
        <img src={props.patch_url} className="patch" alt="mission patch" />
        <span className="flight-no">{props.number}</span>
      </div>
      <div className="card-details">
        <p>
          {/* <span className="flight-no">{props.number}</span> */}
          {/* <br /> */}
          {/* Flight Name: {props.name} */}
          <span className="flight-name">{props.name}</span>
          <br />
          <span className="card-date-time">Date:</span> {props.date}
          <br />
          <span className="card-location">Location:</span> {props.site}
          <br />
          <span className="card-location">Rocket Name:</span> {props.rocketName}
          <br />
          <span className="card-location">Rocket Type:</span> {props.rocketType}
          <br />
          {/* TODO: return "no details available" when there are no details */}
          <span className="card-location">Mission Details: </span>
          {props.details}
          <br />
          <span className="card-location">YouTube Video</span>
          <br />
          <span className="card-location">Wikipedia Page</span>
        </p>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default CardDetails;
