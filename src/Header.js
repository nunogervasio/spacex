import React from "react";
import rover from "./mars-rover.svg";

const Header = props => {
  return (
    <header className="main-header">
      <h1 className="name">SpaceX - API</h1>
      <img src={rover} alt="mars rover" className="main-header-img" />
    </header>
  );
};

export default Header;
