import React from "react";
import "./SliderCard.css";

function SliderCard({ heading, content, pointer }) {
  const [style, setStyle] = React.useState({
    animationName: "close",
    animationDuration: "0s",
    animationFillMode: "forwards",
  });

  // const [clicked, setClicked] = React.useState(false);

  function showContent() {
    if (style.animationName === "close") {
      setStyle({
        animationName: "open",
        animationDuration: "1s",
        animationFillMode: "forwards",
      });
    } else {
      setStyle({
        animationName: "close",
        animationDuration: "1s",
        animationFillMode: "forwards",
      });
    }
  }

  function renderPoints() {
    const feats = content.map((point) => (
      <li className="feat-item">{point}</li>
    ));
    return <ul className="slider-list">{feats}</ul>;
  }
  return (
    <div className="slider-wrapper" >
      <div className="slide-heading"  style={{height : "0px" , marginBottom : "0px"}}onClick={showContent}>
        {heading}
      </div>
      <div className="slide-content" style={style}>
        <p className="slide-content-para" style={style}>
          {pointer ? renderPoints() : content}
        </p>
      </div>
    </div>
  );
}

export default SliderCard;
