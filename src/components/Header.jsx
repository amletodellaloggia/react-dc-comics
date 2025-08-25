import React from "react";

const Header = () => {
  return(
    <header>
      <div className="container-fluid align-items-center">
        <div className="header-col">
          <div id="logo">
            <img src="/public/img/dc-logo.png" alt="DC Comics Logo" />
          </div>
        </div>
      <div className="header-col">
        <ul id="menu">
          <li>
            <a href="#">Characters</a>
          </li>
          <li>
            <a href="#">Comics</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Collectibles</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
      </div>
    </header>
  )
}

export default Header;
