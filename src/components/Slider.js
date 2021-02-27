import React from "react";
import "./Slider.css";
import Image1 from "../images/image-1.jpg";
import Bed1 from "../images/bedroom-1.jpg";
import Dine1 from "../images/dining-1.jpg";
import Hall1 from "../images/hall-1.jpg";
import Image2 from "../images/image-2.jpg";
import Bed2 from "../images/bedroom-2.jpg";
import Dine2 from "../images/dining-2.jpg";
import Hall2 from "../images/hall-2.jpg";
import Image3 from "../images/image-3.jpg";
import Bed3 from "../images/bedroom-3.jpg";
import Pool3 from "../images/pool-3.jpg";
import Hall3 from "../images/hall-3.jpg";

export default class Slider extends React.Component {
  constructor() {
    super();

    this.state = {
      Img: [
        Image1,
        Bed1,
        Dine1,
        Hall1,
        Image2,
        Bed2,
        Dine2,
        Hall2,
        Image3,
        Bed3,
        Hall3,
        Pool3,
      ],
      id: 0,
      visible: true,
    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handlePrev() {
    const lastIndex = this.state.Img.length - 1;

    const resetIndex = this.state.id === 0;
    const index = resetIndex ? lastIndex : this.state.id - 1;

    this.setState({
      id: index,
    });
  }
  handleNext() {
    const lastIndex = this.state.Img.length - 1;

    const resetIndex = this.state.id === lastIndex;
    const index = resetIndex ? 0 : this.state.id + 1;

    this.setState({
      id: index,
    });
  }

  render() {
    return (
      <div className="hotels-container">
        <button className="prevBtn" onClick={this.handlePrev}>
          &#10094;
        </button>
        <img
          src={this.state.Img[this.state.id]}
          alt="Hotels"
          className="hotels-img"
        ></img>{" "}
        <button className="nextBtn" onClick={this.handleNext}>
          &#10095;
        </button>
      </div>
    );
  }
}
