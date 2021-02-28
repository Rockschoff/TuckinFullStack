import React from "react";
import "./NewMaterials.css";
import MaterialInfo from "../Components/info";
import ForYouIcons from "../images/for-you-icon.png";
import ForYouPoints from "../images/for-you-points.png";
import CleanBambooVid from "../images/cleanbamboo.mp4";
import CharcoalVid from "../images/charcoal.mp4";
import TwillVid from "../images/twill.mp4";
import Pic from "../images/waffle.webp";
import FlexCard from "../Components/FlexCard";
import Form from "../Components/Form.js";
import Footer from "../Components/Footer.js";
import Aos from "aos";
import "aos/dist/aos.css";

function NewMaterials() {
  const [material, setMaterial] = React.useState("CleanBamboo");
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  function renderDisplay() {
    if (material === "CleanBamboo") {
      return (
        <video
          src={CleanBambooVid}
          type="video/mp4"
          className="nm-pic"
          loop
          autoplay
          autostart
        />
      );
    } else if (material === "Charcoal") {
      return (
        <video
          src={CharcoalVid}
          type="video/mp4"
          className="nm-pic"
          loop
          autoplay
          autostart
        />
      );
    } else if (material === "Twill") {
      return (
        <video
          src={TwillVid}
          type="video/mp4"
          className="nm-pic"
          loop
          autoplay
          autostart
        />
      );
    } else {
      return (
        <img
          src={Pic}
          type="video/mp4"
          className="nm-pic"
          loop
          autoplay
          autostart
        />
      );
    }
  }

  function giveDes() {
    if (material == "CleanBamboo") {
      return MaterialInfo.CleanBamboo.description;
    } else if (material == "Charcoal") {
      return MaterialInfo.Charcoal.description;
    } else if (material == "Twill") {
      return MaterialInfo.Twill.description;
    } else if (material == "Waffle") {
      return MaterialInfo.Waffle.description;
    }
  }
  return (
    <div>
      <div className="nm-heading" data-aos="fade">
        <p>
          Made from 100% organic bamboo and full of natural benefits, it's the
          foundation of everything we make
        </p>
      </div>
      <div className="button-row1">
        <button
          className="material-button"
          onClick={() => {
            setMaterial("CleanBamboo");
          }}
          style={
            material === "CleanBamboo"
              ? { backgroundColor: " #4E505B", color: "white", border: "none" }
              : {}
          }
          data-aos="fade-right"
        >
          CleanBamboo
        </button>
        <button
          className="material-button"
          onClick={() => {
            setMaterial("Charcoal");
          }}
          style={
            material === "Charcoal"
              ? { backgroundColor: " #4E505B", color: "white", border: "none" }
              : {}
          }
          data-aos="fade-left"
        >
          Charcoal
        </button>
      </div>
      <div className="button-row2">
        <button
          className="material-button"
          onClick={() => {
            setMaterial("Twill");
          }}
          style={
            material === "Twill"
              ? { backgroundColor: " #4E505B", color: "white", border: "none" }
              : {}
          }
          data-aos="fade-right"
        >
          Twill
        </button>
        <button
          className="material-button"
          onClick={() => {
            setMaterial("Waffle");
          }}
          style={
            material === "Waffle"
              ? { backgroundColor: " #4E505B", color: "white", border: "none" }
              : {}
          }
          data-aos="fade-left"
        >
          Waffle
        </button>
      </div>
      <div className="nm-content" data-aos="fade">
        <p className="nm-heading ">{material}</p>
        <p>{giveDes()}</p>
        <p className="nm-for-you">This is for you if...</p>
        <div className="nm-for-you-pics">
          <img
            src={ForYouIcons}
            className="nm-for-you-icons"
            data-aos="fade-right"
          />
          <img
            src={ForYouPoints}
            className="nm-for-you-points"
            data-aos="fade-left"
          />
        </div>
        <div className="nm-display-pic" data-aos="fade">
          {renderDisplay()}
        </div>
      </div>
      <div className="nm-flexcards">
        <p className="nm-made-from">
          Made from 100% organic bamboo, it’s softer, cooler and more
          sustainable than cotton. For a healthier planet and happier lounging.
        </p>
        <div data-aos="fade">
          {" "}
          <FlexCard ImgSrc="1" />
        </div>
        <div data-aos="fade">
          {" "}
          <FlexCard ImgSrc="2" />
        </div>
        <div data-aos="fade">
          {" "}
          <FlexCard ImgSrc="3" />
        </div>
      </div>
      <div className="space"></div>
      <p className="sign-up-prompt">Sign Up to stay in touch</p>
      <Form />
      <Footer />
    </div>
  );
}

export default NewMaterials;
