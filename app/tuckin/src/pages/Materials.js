import "./Materials.css";
import MaterialInfo from "../Components/info";
import React from "react";
import CleanBambooVid from "../images/cleanbamboo.mp4";
import CharcoalVid from "../images/charcoal.mp4";
import TwillVid from "../images/twill.mp4";
import { Player } from "video-react";
import ReactDOM from "react-dom";
import pic from "../images/waffle.webp";
import Send from "../Components/Send";
import Aos from "aos"
import "aos/dist/aos.css"


// import "~video-react/dist/video-react.css"; // import css
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
function Materials() {
  const [material, setMaterial] = React.useState("Charcoal");
  const [buttonStyles, setButtonStyles] = React.useState({
    cleanBamboo: {
      color: "black",
      backgroundColor: "transparent",
    },
    charcoal: {
      color: "white",
      backgroundColor: "grey",
    },
    twill: {
      color: "black",
      backgroundColor: "transparent",
    },
    waffle: {
      color: "black",
      backgroundColor: "transparent",
    },
  });
  var status = ["true", "false", "false", "false"];

  React.useEffect(()=>{
    Aos.init({duration : 500})
  })

  // React.useEffect(() => {
  //   var index = 0;
  //   console.log("new index", index);
  //   if (material === "CleanBamboo") {
  //     index = 0;
  //   } else if (material === "Charcoal") {
  //     index = 1;
  //   } else if (material === "Twill") {
  //     index = 2;
  //   } else if (material === "Waffle") {
  //     index = 3;
  //   }
  //   var i;
  //   for (i = 0; i < 4; i++) {
  //     if (i === index) {
  //       status[i] = "true";
  //     } else {
  //       status[i] = "false";
  //     }
  //   }
  //   console.log(status);
  // }, [material]);

  function putHeading() {
    return <div >{renderHeading()}</div>;
  }

  function putBody() {
    const ls = giveFeats();
    console.log(ls, "here");
    const feats = ls.map((point) => <li className="feat-item">{point}</li>);
    return (
      <div className="material-body-body">
        {renderDes()}
        <div className="line"></div>
        <div className="material-for-you">This is for you if..</div>
        <div className="space"></div>
        <ul className="material-feats">{feats}</ul>
      </div>
    );
  }

  function putVideo() {
    return (
      <div className="img-wrapper">
        {/*<img src={pic} classname="material-pic" />*/}

        {renderDisplay()}
      </div>
    );
  }

  function changeStyle(name) {
    if (name === "CleanBamboo") {
      setButtonStyles({
        cleanBamboo: {
          color: "white",
          backgroundColor: "grey",
        },
        charcoal: {
          color: "black",
          backgroundColor: "transparent",
        },
        twill: {
          color: "black",
          backgroundColor: "transparent",
        },
        waffle: {
          color: "black",
          backgroundColor: "transparent",
        },
      });
    } else if (name === "Charcoal") {
      setButtonStyles({
        cleanBamboo: {
          color: "black",
          backgroundColor: "transparent",
        },
        charcoal: {
          color: "white",
          backgroundColor: "grey",
        },
        twill: {
          color: "black",
          backgroundColor: "transparent",
        },
        waffle: {
          color: "black",
          backgroundColor: "transparent",
        },
      });
    } else if (name === "Twill") {
      setButtonStyles({
        cleanBamboo: {
          color: "black",
          backgroundColor: "transparent",
        },
        charcoal: {
          color: "black",
          backgroundColor: "transparent",
        },
        twill: {
          color: "white",
          backgroundColor: "grey",
        },
        waffle: {
          color: "black",
          backgroundColor: "transparent",
        },
      });
    } else if (name === "Waffle") {
      setButtonStyles({
        cleanBamboo: {
          color: "black",
          backgroundColor: "transparent",
        },
        charcoal: {
          color: "black",
          backgroundColor: "transparent",
        },
        twill: {
          color: "black",
          backgroundColor: "transparent",
        },
        waffle: {
          color: "white",
          backgroundColor: "grey",
        },
      });
    }
  }

  function handleClick(event) {
    setMaterial(event.target.innerText);
    changeStyle(event.target.innerText);
  }

  function giveFeats() {
    if (material === "CleanBamboo") {
      return MaterialInfo.CleanBamboo.features;
    } else if (material === "Charcoal") {
      return MaterialInfo.Charcoal.features;
    } else if (material === "Twill") {
      return MaterialInfo.Twill.features;
    } else {
      return MaterialInfo.Waffle.features;
    }
  }

  function renderDes() {
    if (material === "CleanBamboo") {
      return (
        <div className="material-des ">
          {MaterialInfo.CleanBamboo.description}
        </div>
      );
    } else if (material === "Charcoal") {
      return (
        <div className="material-des ">{MaterialInfo.Charcoal.description}</div>
      );
    } else if (material === "Twill") {
      return (
        <div className="material-des ">{MaterialInfo.Twill.description}</div>
      );
    } else {
      return (
        <div className="material-des ">{MaterialInfo.Waffle.description}</div>
      );
    }
  }

  function renderHeading() {
    if (material === "CleanBamboo") {
      return (
        <div className="material-head"><p className="fade-right material-head" >{MaterialInfo.CleanBamboo.name}</p></div>
      );
    } else if (material === "Charcoal") {
      return <div className="material-head ">{MaterialInfo.Charcoal.name}</div>;
    } else if (material === "Twill") {
      return <div className="material-head ">{MaterialInfo.Twill.name}</div>;
    } else {
      return <div className="material-head ">{MaterialInfo.Waffle.name}</div>;
    }
  }

  function renderDisplay() {
    if (material === "CleanBamboo") {
      return (
        <video
          src={CleanBambooVid}
          type="video/mp4"
          className="material-pic"
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
          className="material-pic"
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
          className="material-pic"
          loop
          autoplay
          autostart
        />
      );
    } else {
      return (
        <img
          src={pic}
          type="video/mp4"
          className="material-pic"
          loop
          autoplay
          autostart
        />
      );
    }
  }

  return (
    <div>
      <div className="material-choices">
        {/*<Button
          name="CleanBamboo"
          active={material === "CleanBamboo" ? "true" : "false"}
          onClick={() => setMaterial("CleanBamboo")}
        />
        <Button
          name="Charcoal"
          active={material === "Charcoal" ? "true" : "false"}
          onClick={console.log("Charcoal")}
        />
        <Button
          name="Twill"
          active={material === "Twill" ? "true" : "false"}
          onClick={console.log("Twill")}
        />
        <Button
          name="Waffle"
          active={material === "Waffle" ? "true" : "false"}
          onClick={() => {
            console.log("yes");
            setMaterial("Waffle");
          }}
        />*/}
        <button
          className="material-button"
          onClick={(event) => {
            Send("Materials", "CleanBamboo");
            handleClick(event);
          }}
          style={buttonStyles.cleanBamboo}
        >
          CleanBamboo
        </button>
        <button
          className="material-button"
          onClick={(event) => {
            Send("Materials", "Charcoal");
            handleClick(event);
          }}
          style={buttonStyles.charcoal}
        >
          Charcoal
        </button>
        <button
          className="material-button"
          onClick={(event) => {
            Send("Materials", "Twill");
            handleClick(event);
          }}
          style={buttonStyles.twill}
        >
          Twill
        </button>
        <button
          className="material-button"
          onClick={(event) => {
            Send("Materials", "Waffle");
            handleClick(event);
          }}
          style={buttonStyles.waffle}
        >
          Waffle
        </button>
      </div>
      <div className="writing">
        {putHeading()}
        {putBody()}
      </div>
      <div className="display">{putVideo()}</div>
      {/*<div className="details">
        <div>{putHeading()}</div>
        <div>{putBody()}</div>
        <div>{putVideo()}</div>
      </div>*/}
      <p className="sign-up-prompt">Sign Up to stay in touch</p>
      <Form />
      <Footer />
    </div>
  );
}

export default Materials;
