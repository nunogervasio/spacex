import React from "react";
import monster from "../../img/alien-with-aqualung.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page Cannot Be Found</h1>
      <p className="space-font">Only...</p>
      <img src={monster} alt="space monster" className="monster" />
      <h2>Space Monster!</h2>
    </div>
  );
};

export default NotFound;
