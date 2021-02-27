import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Pool3 from "../images/pool-3.jpg";
import Desert1 from "../images/desert-1.jpg";
import Hills1 from "../images/hill-1.jpg";
import Image3 from "../images/image-3.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the tours and enjoy your stay at Hilford!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Hills1}
              text="Explore the breathtaking sights of hills in Switzerland"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image3}
              text="Interlaken Branch of Hotel Hilford"
              label="Mystery"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Desert1}
              text="Book a stay with us and enjoy a beautiful Desert trip on a guided camel tour"
              label="Adrenaline"
              path="/log"
            />
            <CardItem
              src={Pool3}
              text="View our hotels and resorts rooms"
              label="Adventure"
              path="/hotels"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
