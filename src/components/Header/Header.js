import React from "react";
import { Link } from "react-router-dom";
import roverImg from "../../img/mars-rover.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <div className="flex-wrapper">
          <h1 className="name">SpaceX - API</h1>
          <img src={roverImg} alt="mars rover" className="main-header-img" />
        </div>
      </Link>
    </header>
  );
};

export default Header;