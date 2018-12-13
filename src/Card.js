import React from "react";

const Row = props => {
  return (
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
          Date/Time: {props.date}
          <br />
          Location: {props.site}
          {/* <br /> */}
          {/* Details: {props.details} */}
        </p>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Row;
