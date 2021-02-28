import React from "react";
import "./FlexCard.css";
import pic1 from "../images/1.svg";
import pic2 from "../images/2.svg";
import pic3 from "../images/3.svg";

function FlexCard({ ImgSrc }) {
  function WhichPic(src) {
    if (src === "1") {
      return pic1;
    } else {
      if (src === "2") {
        return pic2;
      } else {
        return pic3;
      }
    }
  }
  return (
    <div>
      <div>
        <img src={WhichPic(ImgSrc)} className="flexcard-image" />
        {ImgSrc === "1" ? (
          <p className="flexcard-heading">Repurposed and Reusable</p>
        ) : ImgSrc === "2" ? (
          <p className="flexcard-heading">Guilt-free eco packaging</p>
        ) : (
          <p className="flexcard-heading">Upcycled Plastic</p>
        )}
        {ImgSrc === "1" ? (
          <p className="flexcard-content">
            We utilize every extra inch of our 100% biodegradable fabric to
            create the reusable drawstring bags that carry our sheets
          </p>
        ) : ImgSrc === "2" ? (
          <p className="flexcard-content">
            All of our packaging is designed to be resealed, which means it can
            be reused to reduce waste.
          </p>
        ) : (
          <p className="flexcard-content">
            We use RPET material made from recycled water bottles to create
            luxurious filling for our eye masks.
          </p>
        )}
      </div>
    </div>
  );
}

export default FlexCard;
