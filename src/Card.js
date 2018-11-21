import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h3>{props.number}</h3>
      <h3>{props.name}</h3>
      <h3>{props.year}</h3>
    </div>
  );
};

export default Card;
