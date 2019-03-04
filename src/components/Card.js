import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  // console.log(props.core_serial.core_serial);
  return (
    <Link to={`/mission/${props.name}`}>
      <div className="main-card">
        <div className="card-img ">
          <img src={props.patch_url} className="patch" alt="mission patch" />
          <span className="flight-no">{props.number}</span>
        </div>
        <div className="card-details">
          <p>
            {/* <span className="flight-no">{props.number}</span> */}
            {/* <br /> */}
            {/* Flight Name: {props.name} */}
            <span className="flight-name">{props.name}</span>
            {/* {props.year} */}
            <br />
            <span className="card-date-time">Date:</span> {props.date}
            <br />
            <span className="card-location">Location:</span> {props.site}
            {/* <br /> */}
            {/* Details: {props.details} */}
          </p>
        </div>
        {/* <hr /> */}
      </div>
    </Link>
  );
};

export default Card;
