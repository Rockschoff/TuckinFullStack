import React from "react";
import "./Product.css";
import SliderCard from "../Components/SliderCard";
import ProductsInfo from "../Components/ProductsInfo";

import pic1 from "../images/buypic4.png";
import CarousalCard from "../Components/CarousalCard.js";
import Form from "../Components/Form";
import Footer from "../Components/Footer.js";

function Product() {
  //state for the size picked and the number added
  const colors = ["pink", "pink", "pink", "pink"];

  return (
    <>
      <div>
        <div className="photo-section">
          <div className="main-photo"></div>
          <div className="photo-options">
            <div className="option"></div>
            <div className="option"></div>
            <div className="option"></div>
          </div>
        </div>
        <div className="product-name tag">Bamboo Lyocell Sheet Set</div>
        <div className="product-prize tag">$ 138.00</div>
        <p className="colors-heading">Colors:</p>
        <div className="color-section">
          {colors.map((color) => (
            <div className="color-option"></div>
          ))}
        </div>
        <p className="size-heading">Sizes :</p>
        <div className="size-section">
          <div className="size-option-row1">
            <div className="size-option">Size</div>
            <div className="size-option">Size</div>
            <div className="size-option">Size</div>
          </div>
          <div className="size-option-row2">
            <div className="size-option">Size</div>
            <div className="size-option">Size</div>
            <div className="size-option">Size</div>
          </div>
        </div>
        <div className="add-section">
          <div className="counter add-button">
            <button className="minus-button button">-</button>
            <p className="button-prompt button">Add</p>
            <button className="plus-button button">+</button>
          </div>
          <div className="add-to-cart add-button">
            <p className="add-to-cart-text">Add to cart</p>
          </div>
          <p className="cannot-find">
            Can’t find your size? Get notified when we restock
          </p>
          <p className="offer">
            30 night free trial + free delivery on Orders over $50
          </p>
        </div>

        <SliderCard
          heading="Description"
          content={ProductsInfo.product.description}
        />
        <SliderCard
          heading="Details"
          content={ProductsInfo.product.description}
        />
        <SliderCard heading="Care" content={ProductsInfo.product.description} />
        <CarousalCard />
        <p className="sign-up">Sign up to stay in touch! </p>
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Product;
