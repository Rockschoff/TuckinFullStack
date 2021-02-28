import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/prodpics/Prod1/Prod1-white-main.png";
import "./Home.css";
import Card from "../Components/Card";
import Bamboo from "../images/bamboo.png";
import FlexCard from "../Components/FlexCard";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import Send from "../Components/Send.js";
import { animateScroll } from "react-scroll";
import bed from "../images/bed.jfif";
import vector from "../images/vector.svg";
import con1 from "../images/conclusion-image1.jfif";
import con3 from "../images/con3.jfif";
import hero2 from "../images/hero2.jfif";
import Hero from "../Components/Hero";
import Flaunt from "../Components/Flaunt";
import Carousal from "../Components/Carousal";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  const scrollTo = () => {
    animateScroll.scrollTo(550, { duration: 1000 });
  };

  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
  };

  React.useEffect(() => {
    Aos.init({ duration: 500 });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Home">
      <div className="hero">
        <img src={hero2} className="hero-pic" style={{ width: "100%s" }} />
        {/*<p className="hero-text-one">New year, fresh sheets </p>*/}
        <div className="hero-fade">
          <div className="hero-text-two">
            <p style={{ backgroundColor: "transparent" }}>Soft on your skin.</p>
            <p style={{ backgroundColor: "transparent" }}>
              {" "}
              Gentle on our planet.
            </p>
          </div>
          <Link>
            <button
              className="hero-button"
              onClick={() => {
                Send("Home", "Shop Now");
                scrollTo();
              }}
            >
              Shop Sheets
            </button>
          </Link>
        </div>

        <div className="shop-heading">
          {" "}
          Tuck yourself into CleanBamboo Sheets, for mindful living and sleeping{" "}
        </div>
        <div className="body" data-aos="fade-up">
          <div data-aos="fade-up">
            <Card type="1" />
          </div>
          <div data-aos="fade-up">
            <Card type="2" />
          </div>
          <div data-aos="fade-up">
            <Card type="3" />
          </div>
        </div>

        <div data-aos="fade-up">
          <Flaunt />
        </div>
        <div className="reviews" data-aos="fade-up">
          <Carousal className="reviews-carousal" />
        </div>
        <div className="con" data-aos="fade-up">
          <img src={con3} className="conclusion-image" style={{}} />
          <p className="conclusion-text">Clean Bamboo, our fabric of future</p>
          <Link to="/Materials">
            <button
              className="see-more-button"
              onClick={() => {
                Send("Home", "See More");
                scrollToTop();
              }}
            >
              Learn More
            </button>
          </Link>
        </div>
        <div className="home-bottom" data-aos="fade-up">
          <p className="sign-up-prompt">Sign Up to stay in touch</p>
          <Form className="home-form" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;

// /* <p className="made-from">
//             Made from 100% organic bamboo, it’s softer, cooler and more
//             sustainable than cotton. For a healthier planet and happier
//             lounging.
//           </p> */}
//           {/* <div className="flex">
//             <FlexCard ImgSrc="1" />
//             <FlexCard ImgSrc="2" />
//             <FlexCard ImgSrc="3" />
//           </div> */
