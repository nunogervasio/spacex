import React from "react";

const Mission = ({ match }) => {
  let name = match.params.name;
  return <h1>Mission is working with {name}!</h1>;
};

export default Mission;
