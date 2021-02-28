import React from "react";
import "./Card.css";
import Img from "../images/hero.png";
import { Link } from "react-router-dom";
import ProdPics from "./ProdPics.js";
import Send from "./Send";
function Card({ type }) {
  const [typeOnePic, setTypeOnePic] = React.useState(
    type === "1" ? ProdPics.one.sage[0] : ProdPics.four.white[0]
  );

  const [cardName, setCardName] = React.useState(
    type == "1"
      ? "buy-now-bamboo-lyocell"
      : type === "2"
      ? "buy-now-charcoal"
      : "buy-now-bamboo-fitted"
  );

  const [circleStyle, setCircleStyle] = React.useState({
    prod1: {
      white: "circle white-circle no-style",
      sage: "circle sage-circle circle-style",
      pink: "circle pink-circle no-style",
      strip: "circle strip-circle no-style",
    },
    prod2: {
      grey: "circle grey-circle circle-style",
    },
    prod3: {
      white: "circle white-circle circle-style",
      sage: "circle sage-circle no-style",
      pink: "circle pink-circle no-style",
      grey: "circle grey-circle no-style",
    },
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  function renderCircles() {
    if (type === "1") {
      return (
        <>
          <div
            className={circleStyle.prod1.sage}
            onClick={() => {
              setTypeOnePic(ProdPics.one.sage[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod1: {
                  white: "circle white-circle no-style",
                  sage: "circle sage-circle circle-style",
                  pink: "circle pink-circle no-style",
                  strip: "circle strip-circle no-style",
                },
              }));
            }}
          ></div>
          <div
            className={circleStyle.prod1.white}
            onClick={() => {
              setTypeOnePic(ProdPics.one.white[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod1: {
                  white: "circle white-circle circle-style",
                  sage: "circle sage-circle no-style",
                  pink: "circle pink-circle no-style",
                  strip: "circle strip-circle no-style",
                },
              }));
            }}
          ></div>
          <div
            className={circleStyle.prod1.pink}
            onClick={() => {
              setTypeOnePic(ProdPics.one.pink[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod1: {
                  white: "circle white-circle no-style",
                  sage: "circle sage-circle no-style",
                  pink: "circle pink-circle circle-style",
                  strip: "circle strip-circle no-style",
                },
              }));
            }}
          ></div>
          <div
            className={circleStyle.prod1.strip}
            onClick={() => {
              setTypeOnePic(ProdPics.one.strip[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod1: {
                  white: "circle white-circle no-style",
                  sage: "circle sage-circle no-style",
                  pink: "circle pink-circle no-style",
                  strip: "circle strip-circle circle-style",
                },
              }));
            }}
          ></div>
        </>
      );
    } else if (type === "2") {
      return (
        <>
          <div className={circleStyle.prod2.grey}></div>
        </>
      );
    } else {
      return (
        <>
          <div
            className={circleStyle.prod3.white}
            onClick={() => {
              setTypeOnePic(ProdPics.four.white[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod3: {
                  white: "circle white-circle circle-style",
                  sage: "circle sage-circle no-style",
                  pink: "circle pink-circle no-style",
                  grey: "circle grey-circle no-style",
                },
              }));
            }}
          ></div>
          <div
            className={circleStyle.prod3.sage}
            onClick={() => {
              setTypeOnePic(ProdPics.four.green[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod3: {
                  white: "circle white-circle no-style",
                  sage: "circle sage-circle circle-style",
                  pink: "circle pink-circle no-style",
                  grey: "circle grey-circle no-style",
                },
              }));
            }}
          ></div>
          <div
            className={circleStyle.prod3.pink}
            onClick={() => {
              setTypeOnePic(ProdPics.four.pink[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod3: {
                  white: "circle white-circle no-style",
                  sage: "circle sage-circle no-style",
                  pink: "circle pink-circle circle-style",
                  grey: "circle grey-circle no-style",
                },
              }));
            }}
          ></div>
          <div
            className={circleStyle.prod3.grey}
            onClick={() => {
              setTypeOnePic(ProdPics.four.grey[0]);
              setCircleStyle((prev) => ({
                ...prev,
                prod3: {
                  white: "circle white-circle no-style",
                  sage: "circle sage-circle no-style",
                  pink: "circle pink-circle no-style",
                  grey: "circle grey-circle circle-style",
                },
              }));
            }}
          ></div>
        </>
      );
    }
  }

  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: "#f5f3eb", border: "none" }}
      >
        <img
          src={
            type === "1" ? typeOnePic : type === "2" ? ProdPics.two : typeOnePic
          }
          className="card-img"
        />
        <div className="card-name">
          {type === "1"
            ? "Bamboo Lyocell Sheet Set"
            : type === "2"
            ? "Charcoal Sheet Set"
            : "Bamboo Lyocell Fitted Sheet Set"}
        </div>
        <div className=" card-prize">
          {type === "1" ? "INR 2499" : type === "2" ? "INR 2499" : "INR 2999"}
        </div>
        <div className="card-line"></div>
        <div className="card-circles">
          {renderCircles()}

          <Link to={"/Product-" + type}>
            <button
              className="card-buy"
              onClick={() => {
                Send("Home", cardName);
                scrollToTop();
              }}
              style={{
                color: "white",
              }}
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Card;
