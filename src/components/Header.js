import React from "react";
import { Link } from "react-router-dom";
import rover from "../img/mars-rover.svg";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        {/* <a href="#"> */}
        <h1 className="name">SpaceX - API</h1>
        {/****** TODO: line up img next to header */}
        {/* <img src={rover} alt="mars rover" className="main-header-img" /> */}
        {/* </a> */}
      </Link>
    </header>
  );
};

export default Header;
