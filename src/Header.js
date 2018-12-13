import React from "react";

const Header = props => {
  return (
    <header class="main-header">
      <h1 class="name">
        <a href="#">SpaceX API</a>
      </h1>
      <ul class="main-nav">
        <li>
          <a href="https://www.spacex.com/">SpaceX.com</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA">
            SpaceX YouTube
          </a>
        </li>
        <li>
          <a href="https://twitter.com/spacex">SpaceX Twitter</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/SpaceX">SpaceX Wiki</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
