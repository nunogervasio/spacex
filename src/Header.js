import React from "react";

const Header = props => {
  return (
    <header className="main-header">
      <h1 className="name">
        <a href="#">SpaceX API</a>
      </h1>
      <ul className="main-nav">
        <li>
          <a href="https://www.spacex.com/">SpaceX.com</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA">
            YouTube
          </a>
        </li>
        <li>
          <a href="https://twitter.com/spacex">Twitter</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/SpaceX">Wiki</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
