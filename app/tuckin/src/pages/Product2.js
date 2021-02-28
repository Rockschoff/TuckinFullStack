import React from "react";
import "./Product2.css";
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
  const [color, setColor] = React.useState("white");
  const [main, setMain] = React.useState(ProdPics.one.white[0]);
  const [cart, setCart] = React.useState(0);
  const [size, setSize] = React.useState("118x118");
  const [isOpen, setIsOpen] = React.useState(false);
  function togglePopup() {
    setIsOpen(!isOpen);
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
      <div>
      <div data-aos= "fade">
        <div className="photo-section">
          <img src={ProdPics.two} className="main-photo"></img>
          <div className="photo-options">
            <img src={ProdPics.two} className="option"></img>
          </div>
        </div></div>
        <div className="product-name tag" data-aos="fade">Charcoal Fitted Sheet Set</div>
        <div className="product-prize tag" data-aos="fade">INR 2499</div>
        <div data-aos="fade-up">
        <p className="colors-heading">Colors:</p>
        <div className="color-section">
          {/*colors.map((color) => (
            <div className="color-option"></div>
          ))*/}
          <div
            className="color-option "
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              setColor("grey");
              setMain(ProdPics.one.white[0]);
            }}
          ></div>
          {/*<div
            className="color-option "
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("sage");
              setMain(ProdPics.one.sage[0]);
            }}
          ></div>
          <div
            className="color-option "
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
              setMain(ProdPics.one.pink[0]);
            }}
          ></div>
          <div
            className="color-option "
            style={{ backgroundColor: "lightblue" }}
            onClick={() => {
              setColor("strip");
              setMain(ProdPics.one.strip[0]);
            }}
          ></div>*/}
        </div> </div>
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
              Bought(cart, size, color, "Charcoal");
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
          content={ProductsInfo.prod2.description}
        />
        <SliderCard heading="Details" content={ProductsInfo.prod2.details} />
        <SliderCard heading="Care" content={ProductsInfo.prod2.care} />
        </div>
        <div data-aos="fade-up"><CarousalCard /></div>
        <div data-aos="fade-up">
        <p className="sign-up">Sign up to stay in touch! </p>
        <Form />
        <Footer />
      </div>
      </div>
    </>
  );
}

export default Product1;
