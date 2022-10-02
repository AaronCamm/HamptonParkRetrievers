import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/hp-icon2.png";
import phone from "../../imgs/phone.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="phone">
        <img src={phone} alt="PhoneImg" className="phoneImg" />
        0444 444 444
      </div>
      <div className="navContainer">
        <ul className="navItems">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="aboutus">
            <li>About Us</li>
          </Link>
          <Link to="lineage">
            <li>Lineage</li>
          </Link>
          <Link to="/">
            <img src={logo} alt="Logo" className="navLogo" />
          </Link>
          <Link to="availability">
            <li>Availability</li>
          </Link>
          <Link to="gallery">
            <li>Gallery</li>
          </Link>
          <Link to="contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
