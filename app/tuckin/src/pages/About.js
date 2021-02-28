import React from "react";
import "./About.css";
import Form from "../Components/Form.js";
import Footer from "../Components/Footer.js";
import one from "../images/about1.png";
import two from "../images/about2.png";
import textPic1 from "../images/text-pic1.png";
import textPic2 from "../images/text-pic2.png";
import bigImage from "../images/big-image1.png";
import benPic1 from "../images/ben-pic1.png";
import benPic2 from "../images/pic2.png";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <div className="about-page">
        <div className="main-heading">
          <h2 className="title1" data-aos="fade">
            CleanBamboo™ ,
          </h2>
          <h2 className="title2" data-aos="fade">
            the fabric of our future
          </h2>

          <p className="title-para1" data-aos="fade">
            Cotton is known as the "fabric of our lives," but these well-crafted
            words hide an ugly truth.
          </p>
          <p className="title-para2" data-aos="fade">
            Compared to cotton sheets, out signature cleanBamboo sheet set :.
          </p>

          <div
            className="about-pics"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={one} data-aos="fade-right" className="image1" />
            <img src={two} data-aos="fade-left" className="image2" />
          </div>
          <div
            className="about-text-pics"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={textPic1} data-aos="fade-right" className="text-image1" />
            <img src={textPic2} data-aos="fade-left" className="text-image2" />
          </div>
        </div>
        <div className="big-image">
          <img src={bigImage} className="big-image" />
        </div>
        <div className="benefits" style={{ backgroundColor: "#E1D2BE" }}>
          <h2 className="benefits-heading">
            The most resource efficient plant on the planet
            <div
              className="ben-points"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src={benPic1}
                alt=""
                data-aos="fade-right"
                className="ben-pic1"
              />
              <img
                src={benPic2}
                alt=""
                data-aos="fade-left"
                className="ben-pic2"
              />
            </div>
          </h2>
        </div>
        <div data-aos="fade">
          <div className="sign-up-prompt">Sign up to stay in touch</div>
          <Form />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default About;
