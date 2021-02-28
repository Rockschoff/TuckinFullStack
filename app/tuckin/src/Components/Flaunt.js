import React from "react";
import { Link } from "react-router-dom";
import Send from "./Send.js";

function Flaunt() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div id="shopify-section-1595277280466" className="shopify-section">
      <div
        className="section-home-bamboo animation-section animation-activated"
        id="home-bamboo-1595277280466"
      >
        <div className="container-home" style={{ backgroundColor: "#E6EBE6" }}>
          <div
            className="home-bamboo__graphics"
            style={{ backgroundColor: "#E6EBE6" }}
          >
            <div
              className="home-bamboo__graphic animate"
              data-animation="image-from-left"
              style={{ transitionDelay: "0s", backgroundColor: "#E6EBE6" }}
            >
              <div
                className="home-bamboo__icon"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                <img
                  data-src="//cdn.shopify.com/s/files/1/1956/2323/files/Breathable_White_c8a5584c-efbc-48a6-be58-0995f1876e19_300x.png?v=1596422614"
                  alt="ettitude"
                  className="lazyautosizes lazyloaded"
                  data-sizes="auto"
                  sizes="60px"
                  src="//cdn.shopify.com/s/files/1/1956/2323/files/Breathable_White_c8a5584c-efbc-48a6-be58-0995f1876e19_300x.png?v=1596422614"
                  style={{ backgroundColor: "#E6EBE6" }}
                />
              </div>
              <div
                className="home-bamboo__icon-text"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                Breathable
              </div>
            </div>

            <div
              className="home-bamboo__graphic animate"
              data-animation="image-from-left"
              style={{ transitionDelay: "0.2s", backgroundColor: "#E6EBE6" }}
            >
              <div
                className="home-bamboo__icon"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                <img
                  data-src="//cdn.shopify.com/s/files/1/1956/2323/files/Hypoallergenic_White_0682bfa1-585e-4d1b-b701-4211329add24_300x.png?v=1595779572"
                  alt="ettitude"
                  className="lazyautosizes lazyloaded"
                  data-sizes="auto"
                  sizes="60px"
                  src="//cdn.shopify.com/s/files/1/1956/2323/files/Hypoallergenic_White_0682bfa1-585e-4d1b-b701-4211329add24_300x.png?v=1595779572"
                  style={{ backgroundColor: "#E6EBE6" }}
                />
              </div>
              <div
                className="home-bamboo__icon-text"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                Hypoallergenic
              </div>
            </div>

            <div
              className="home-bamboo__graphic animate"
              data-animation="image-from-left"
              style={{ transitionDelay: "0.4s", backgroundColor: "#E6EBE6" }}
            >
              <div
                className="home-bamboo__icon"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                <img
                  data-src="//cdn.shopify.com/s/files/1/1956/2323/files/Moisture_wicking_white_27fced08-2ad4-4a19-ab50-015c4aa5a059_300x.png?v=1595779590"
                  alt="ettitude"
                  className="lazyautosizes lazyloaded"
                  data-sizes="auto"
                  sizes="60px"
                  src="//cdn.shopify.com/s/files/1/1956/2323/files/Moisture_wicking_white_27fced08-2ad4-4a19-ab50-015c4aa5a059_300x.png?v=1595779590"
                  style={{ backgroundColor: "#E6EBE6" }}
                />
              </div>
              <div
                className="home-bamboo__icon-text"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                Moisture- wicking
              </div>
            </div>

            <div
              className="home-bamboo__graphic animate"
              data-animation="image-from-left"
              style={{ transitionDelay: "0.6s", backgroundColor: "#E6EBE6" }}
            >
              <div
                className="home-bamboo__icon"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                <img
                  data-src="//cdn.shopify.com/s/files/1/1956/2323/files/WaterSaving_White_d1195e6e-86be-42da-a13e-7bdb1e649836_300x.png?v=1595779614"
                  alt="ettitude"
                  className="lazyautosizes lazyloaded"
                  data-sizes="auto"
                  sizes="60px"
                  src="//cdn.shopify.com/s/files/1/1956/2323/files/WaterSaving_White_d1195e6e-86be-42da-a13e-7bdb1e649836_300x.png?v=1595779614"
                  style={{ backgroundColor: "#E6EBE6" }}
                />
              </div>
              <div
                className="home-bamboo__icon-text"
                style={{ backgroundColor: "#E6EBE6" }}
              >
                Water-saving
              </div>
            </div>
          </div>
          <div
            className="home-bamboo__content"
            style={{ backgroundColor: "#E6EBE6" }}
          >
            <h2
              className="animate"
              data-animation="rise"
              style={{ transitionDelay: "0.8s", backgroundColor: "#E6EBE6" }}
            >
              Naturally luxurious bedding with benefits
            </h2>
            <p
              className="animate"
              data-animation="rise"
              style={{ transitionDelay: "1s", backgroundColor: "#E6EBE6" }}
            >
              Made from 100% organic bamboo, it's better for you and the planet.
            </p>
            <Link to="/About">
              <a
                className="cta btn-white animate ett_tracking"
                data-animation="rise"
                href="/collections/bedding"
                id="home-bamboo-1595277280466_cta"
                style={{
                  transitionDelay: "1.2s",
                  backgroundColor: "#4E505B",
                  color: "white",
                }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                Explore Bamboo
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flaunt;
