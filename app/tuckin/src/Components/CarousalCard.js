import React from "react";
import "./CarousalCard.css";
import vid from "../images/prodpics/Prod4/Prod4-pink-1.jpg";
import vid1 from "../images/prodpics/Prod4/Prod4-pink-main.jpg";

function CarousalCard() {
  return (
    <div className="carousal-all">
      <div className="top">
        <div className="top-text">
          <p className="top-text-heading">Deep Pockets</p>
          <p className="top-text-content">
            Deep pockets stretch to fit most bed sizes.
          </p>
        </div>
        <img
          src={vid1}
          type="video/mp4"
          loop
          autoplay
          autostart
          className="top-pic"
        ></img>
      </div>
      <div className="bottom">
        <div className="bottom-text">
          <p className="bottom-text-heading">CleanBamboo</p>
          <p className="bottom-text-content">
            Our signature bamboo lyocell fabric, it’s silky-soft, cooling and
            sustainable.
          </p>
        </div>
        <img
          src={vid}
          type="video/mp4"
          loop
          autoplay
          autostart
          className="bottom-pic"
        ></img>
      </div>
    </div>
  );
}

export default CarousalCard;
