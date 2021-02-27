import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            H.H
            <i class="fas fa-hotel"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hotels" className="nav-links" onClick={closeMenu}>
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/log" className="nav-links-mobile" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle=".btn--outline">BOOK</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
