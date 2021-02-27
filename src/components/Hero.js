import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      {/* <video src='' autoPlay loop muted /> */}
      <h1>Hotel Hilford</h1>
      <p>Hotels & Resorts</p>
      <div className="hero-btn">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Us
        </Button>
        {/* <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          View Rooms !<i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default Hero;
