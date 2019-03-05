import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <Link to={`/mission/${props.name}`}>
      <div className="main-card">
        <div className="card-img ">
          <img src={props.patch_url} className="patch" alt="mission patch" />
          <span className="flight-no ">{props.number}</span>
        </div>
        <div className="card-details">
          <p>
            <span className="flight-name ">{props.name}</span>
            <br />
            <span className="card-date-time">Date:</span> {props.date}
            <br />
            <span className="card-location">Location:</span> {props.site}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  key: PropTypes.number.isRequired,
  patch_url: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired
};
