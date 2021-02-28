import React from "react";
import "./Product3.css";
import SliderCard from "../Components/SliderCard";
import ProductsInfo from "../Components/ProductsInfo";

// import pic1 from "../images/buypic4.png";
import CarousalCard from "../Components/CarousalCard.js";
import Form from "../Components/Form";
import Footer from "../Components/Footer.js";
import ProdPics from "../Components/ProdPics.js";
import Send from "../Components/Send";
import Bought from "../Components/Bought";
import Popup from "../Components/Popup";
import Aos from "aos"
import "aos/dist/aos.css"
function Product1() {
  //state for the size picked and the number added
  const [cart, setCart] = React.useState(0);
  const [color, setColor] = React.useState("white");
  const [main, setMain] = React.useState(ProdPics.four.white[0]);
  const [size, setSize] = React.useState("118x118");
  const [isOpen, setIsOpen] = React.useState(false);
  const [circleStyle, setCircleStyle] = React.useState("white-style");

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function renderOptions() {
    if (color === "white") {
      return (
        <>
          <img
            src={ProdPics.four.white[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.white[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.white[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.white[1]);
            }}
          ></img>
        </>
      );
    } else if (color === "green") {
      return (
        <>
          <img
            src={ProdPics.four.green[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.green[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.green[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.green[1]);
            }}
          ></img>
        </>
      );
    } else if (color === "pink") {
      return (
        <>
          <img
            src={ProdPics.four.pink[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.pink[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.pink[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.pink[1]);
            }}
          ></img>
        </>
      );
    } else {
      return (
        <>
          <img
            src={ProdPics.four.grey[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.grey[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.grey[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.grey[1]);
            }}
          ></img>
        </>
      );
    }
  }

  function handleDeletion() {
    if (cart > 0) {
      setCart(cart - 1);
    } else {
      setCart(0);
    }
  }
  React.useState(()=>{
    Aos.init({duration : 700})
  })
  return (
    <>
      <div><div data-aos="fade">
        <div className="photo-section">
          <img src={main} className="main-photo"></img>
          <div className="photo-options">
            {/*<img
              src={ProdPics.three[0]}
              className="option"
              onClick={() => {
                setMain(ProdPics.three[0]);
              }}
            ></img>
            <img
              src={ProdPics.three[1]}
              className="option"
              onClick={() => {
                setMain(ProdPics.three[1]);
              }}
            ></img>
            <img
              src={ProdPics.three[2]}
              className="option"
              onClick={() => {
                setMain(ProdPics.three[2]);
              }}
            ></img>*/}
            {renderOptions()}
          </div>
        </div></div>
        <div className="product-name tag" data-aos="fade">Bamboo Lyocell Fitted sheet</div>
        <div className="product-prize tag" data-aos="fade">INR 2999</div>
        <div data-aos="fade-up">
        <p className="colors-heading">Colors:</p>
        <div className="color-section">
          <div
            className="color-option "
            style={
              circleStyle === "white-style"
                ? { backgroundColor: "white", border: "3px solid grey" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              Send("Product3", "ColorOption-white");
              setColor("white");
              setMain(ProdPics.four.white[0]);
              setCircleStyle("white-circle");
            }}
          ></div>
          <div
            className="color-option "
            style={
              circleStyle === "sage-style"
                ? { backgroundColor: "#598556", border: "3px solid grey" }
                : { backgroundColor: "#598556" }
            }
            onClick={() => {
              Send("Product3", "ColorOption-green");
              setColor("green");
              setMain(ProdPics.four.green[0]);
              setCircleStyle("sage-style");
            }}
          ></div>
          <div
            className="color-option "
            style={
              circleStyle === "pink-style"
                ? { backgroundColor: "pink", border: "3px solid grey" }
                : { backgroundColor: "pink" }
            }
            onClick={() => {
              Send("Product3", "ColorOption-pink");
              setColor("pink");
              setMain(ProdPics.four.pink[0]);
              setCircleStyle("pink-style");
            }}
          ></div>
          <div
            className="color-option "
            style={
              circleStyle === "grey-style"
                ? { backgroundColor: "grey", border: "3px solid grey" }
                : { backgroundColor: "grey" }
            }
            onClick={() => {
              Send("Product3", "ColorOption-grey");
              setColor("grey");
              setMain(ProdPics.four.grey[0]);
              setCircleStyle("grey-style");
            }}
          ></div>
        </div></div>
        <div data-aos="fade-up">
        <p className="size-heading">Sizes :</p>
        <div className="size-section">
          <div className="size-option-row1">
            <button
              className="size-option"
              onClick={() => {
                Send("Product1", "108x108");
                setSize("108x108");
              }}
              style={size === "108x108" ? { backgroundColor: "lightgray" } : {}}
            >
              Single
            </button>
            <button
              className="size-option"
              onClick={() => {
                Send("Product1", "112x112");
                setSize("112x112");
              }}
              style={size === "112x112" ? { backgroundColor: "lightgray" } : {}}
            >
              {" "}
              King
            </button>
            <button
              className="size-option"
              onClick={() => {
                Send("Product1", "108x112");
                setSize("108x112");
              }}
              style={size === "108x112" ? { backgroundColor: "lightgray" } : {}}
            >
              Queen
            </button>
          </div>
          {/*<div className="size-option-row2">
              <div className="size-option">Size</div>
              <div className="size-option">Size</div>
              <div className="size-option">Size</div>
            </div>*/}
        </div>
        <div className="add-section">
          <div className="counter add-button">
            <button
              className="minus-button butt"
              onClick={() => {
                handleDeletion();
              }}
            >
              -
            </button>
            <p className="button-prompt butt">{cart}</p>
            <button
              className="plus-button butt"
              onClick={() => {
                setCart(cart + 1);
              }}
            >
              +
            </button>
          </div>
          <div
            className="add-to-cart add-button"
            onClick={() => {
              Bought(cart, size, color, "Bamboo Fitted");
              togglePopup();
            }}
          >
            <p className="add-to-cart-text">Buy Now</p>
          </div>
          {isOpen && <Popup handleClose={togglePopup} />}
          <p className="cannot-find">
            Can’t find your size? Get notified when we restock
          </p>
          <p className="offer">
            30 night free trial + free delivery on Orders over $50
          </p>
        </div></div>
            <div data-aos="fade-up">
        <SliderCard
          heading="Description"
          content={ProductsInfo.prod3.description}
        />
        <SliderCard heading="Details" content={ProductsInfo.prod3.details} />
        <SliderCard heading="Care" content={ProductsInfo.prod3.care} />
        </div>
        <div data-aos="fade-up"><CarousalCard /></div>
        <div data-aos="fade-up"><p className="sign-up">Sign up to stay in touch! </p>
        <Form />
        <Footer /></div>
      </div>
    </>
  );
}

export default Product1;
