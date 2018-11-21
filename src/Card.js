import React from "react";

const Card = props => {
  return (
    // <div className="card">
    <div className="margins">
      <p>Flight Number: {props.number}</p>
      <p>Flight Name: {props.name}</p>
      <p>Flight Year: {props.year}</p>
    </div>
    // </div>
  );
};

export default Card;
