import React from "react";
import "./Carousal.css";

function Carousal() {
  return (
    <div
      id="shopify-section-1595277489161"
      className="shopify-section"
      style={{ backgroundColor: "#f0f4f7" }}
    >
      <div
        className="section-reviews animation-section animation-activated"
        id="home-reviews-1595277489161"
      >
        <div className="container-home" style={{ backgroundColor: "#F0F4F7" }}>
          <div
            className="reviews__content"
            style={{ backgroundColor: "#F0F4F7" }}
          >
            <h2
              className="animate"
              data-animation="rise"
              style={{ transitionDelay: "0s", backgroundColor: "#F0F4F7" }}
            >
              Sharing the sustainable love
            </h2>
            <p
              className="animate"
              data-animation="rise"
              style={{ transitionDelay: "0.2s", backgroundColor: "#F0F4F7" }}
            >
              <a href="/pages/reviews">Over 13,000+ 5-star reviews</a>
            </p>
          </div>
          <div className="reviews__blocks js-home-reviews slick-initialized slick-slider">
            {/*<button
              type="button"
              className="slick-prev slick-arrow"
              style={{ display: "block", backgroundColor: "#f0f4f7" }}
            >
              <svg
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.9668 12.171C5.72272 11.3447 5.08201 9.65754 3.60229 8.26308C2.67174 7.38509 1.72594 6.92027 1.08524 6.67925C1.72594 6.43824 2.65649 5.97342 3.60229 5.09543C5.08201 3.68375 5.72272 1.99663 5.9668 1.1875"
                  stroke="#4E505B"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>*/}

            <div
              aria-live="polite"
              className="slick-list draggable"
              style={{ backgroundColor: "#F0F4F7" }}
            >
              <div
                className="slick-track"
                role="listbox"
                style={{
                  opacity: "1",
                  width: "2000px",
                  transform: "translate3d(-800px, 0px, 0px)",
                  backgroundColor: "#f0f4f7",
                }}
              >
                <div
                  className="reviews__block slick-slide slick-cloned"
                  data-slick-index="-1"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "400px", backgroundColor: "#f0f4f7" }}
                >
                  <div
                    className="reviews__block-stars"
                    style={{ backgroundColor: "#F0F4F7" }}
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/1956/2323/files/Group.svg?v=1595778733"
                      alt="Review stars"
                      className=" lazyloaded"
                      style={{ backgroundColor: "#f0f4f7" }}
                    />
                  </div>
                  <p
                    className="reviews__block-text"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    “Best investment for me and my body. My mood is so positive
                    with bed sheets like these.”
                  </p>
                  <div
                    className="reviews__block-attribution"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    Myriam L., Nevada, USA
                  </div>
                </div>
                <div
                  className="reviews__block slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide00"
                  style={{ width: "400px", backgroundColor: "#f0f4f7" }}
                >
                  <div
                    className="reviews__block-stars"
                    style={{ backgroundColor: "#F0F4F7" }}
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/1956/2323/files/Group.svg?v=1595778733"
                      alt="Review stars"
                      className=" lazyloaded"
                      style={{ backgroundColor: "#f0f4f7" }}
                    />
                  </div>
                  <p
                    className="reviews__block-text"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    “They make my 1600 thread count Egyptian cotton sheets feel
                    like sandpaper.”
                  </p>
                  <div
                    className="reviews__block-attribution"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    Dean D., Queensland, Australia
                  </div>
                </div>
                <div
                  className="reviews__block slick-slide slick-current slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide01"
                  style={{ width: "400px", backgroundColor: "#f0f4f7" }}
                >
                  <div
                    className="reviews__block-stars"
                    style={{ backgroundColor: "#F0F4F7" }}
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/1956/2323/files/Group.svg?v=1595778733"
                      alt="Review stars"
                      className=" lazyloaded"
                      style={{ backgroundColor: "#f0f4f7" }}
                    />
                  </div>
                  <p
                    className="reviews__block-text"
                    style={{
                      backgroundColor: "#f0f4f7",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    “You can feel the calmness of the soft <br />
                    fabric, Truly enhances your sleeping <br /> experience
                  </p>
                  <div
                    className="reviews__block-attribution"
                    style={{ backgroundColor: "#f0f4f7", textAlign: "left" }}
                  >
                    Rishi, New Delhi.
                  </div>
                </div>
                <div
                  className="reviews__block slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide02"
                  style={{ width: "400px", backgroundColor: "#f0f4f7" }}
                >
                  <div
                    className="reviews__block-stars"
                    style={{ backgroundColor: "#F0F4F7" }}
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/1956/2323/files/Group.svg?v=1595778733"
                      alt="Review stars"
                      className=" lazyloaded"
                      style={{ backgroundColor: "#f0f4f7" }}
                    />
                  </div>
                  <p
                    className="reviews__block-text"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    “Best investment for me and my body. My mood is so positive
                    with bed sheets like these.”
                  </p>
                  <div
                    className="reviews__block-attribution"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    Myriam L., Nevada, USA
                  </div>
                </div>
                <div
                  className="reviews__block slick-slide slick-cloned"
                  data-slick-index="3"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "400px", backgroundColor: "#f0f4f7" }}
                >
                  <div
                    className="reviews__block-stars"
                    style={{ backgroundColor: "#F0F4F7" }}
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/1956/2323/files/Group.svg?v=1595778733"
                      alt="Review stars"
                      className=" lazyloaded"
                      style={{ backgroundColor: "#f0f4f7" }}
                    />
                  </div>
                  <p
                    className="reviews__block-text"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    “They make my 1600 thread count Egyptian cotton sheets feel
                    like sandpaper.”
                  </p>
                  <div
                    className="reviews__block-attribution"
                    style={{ backgroundColor: "#f0f4f7" }}
                  >
                    Dean D., Queensland, Australia
                  </div>
                </div>
              </div>
            </div>

            {/*  <button
              type="button"
              className="slick-next slick-arrow"
              style={{ display: "block" }}
            >
              <svg
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.933594 12.0235C1.17767 11.1972 1.81838 9.51008 3.2981 8.11562C4.22865 7.23763 5.17445 6.77281 5.81515 6.53179C5.17445 6.29078 4.2439 5.82596 3.2981 4.94796C1.81838 3.53629 1.17767 1.84917 0.933594 1.04004"
                  stroke="#4E505B"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
