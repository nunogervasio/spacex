import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ patch_url, number, name, date, site }) => {
  return (
    <Link to={`/mission/${name}`}>
      <div className="main-card">
        <div className="card-img ">
          <img src={patch_url} className="patch" alt="mission patch" />
          <span className="flight-no ">{number}</span>
        </div>
        <div className="card-details">
          <p>
            <span className="flight-name ">{name}</span>
            <br />
            <span className="card-date-time">Date:</span> {date}
            <br />
            <span className="card-location">Location:</span> {site}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  patch_url: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired
};
