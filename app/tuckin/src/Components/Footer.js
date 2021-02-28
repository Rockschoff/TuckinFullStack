import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-text">
          Consumers rate us 4.7/5 based on 2000+ reviews
        </div>
        <div className="footer-media">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            size="3x"
            className="footer-icon"
          />
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="3x"
            className="footer-icon"
          />
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size="3x"
            className="footer-icon"
          />
        </div>
        <div className="footer-text-final">
          <FontAwesomeIcon
            icon={["fas", "copyright"]}
            style={{ backgroundColor: "#656565" }}
          />
          {"    Tuckin 2021 | Crafted in India"}
        </div>
      </div>
    </>
  );
}

export default Footer;
