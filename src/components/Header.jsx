import React from "react";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-25">
            <div id="logo-header">
              <img src="./img/dc-logo.png" alt="DC Comics Logo" />
            </div>
          </div>
          <HeaderNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
