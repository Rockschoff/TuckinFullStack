import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function Navbar({ position }) {
  const [click, setClick] = useState(false);

  function checkClick() {
    if (window.innerWidth >= 750) {
      setClick(true);
    }
  }

  useEffect(() => {
    checkClick();
  }, []);

  window.addEventListener("resize", checkClick);

  return (
    <nav>
      <Link to="/">
        <div className="logo">tuckin</div>
      </Link>
      <ul
        className="nav-links"
        style={{ transform: click ? "translateX(0)" : "translateX(-500px)" }}
      >
        <li>
          <Link
            to="/"
            className="link"
            onClick={() => {
              setClick(false);
            }}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/Materials"
            className="link"
            onClick={() => {
              setClick(false);
            }}
          >
            Materials
          </Link>
        </li>
        <li>
          <Link
            to="/trackorder"
            className="link"
            onClick={() => {
              setClick(false);
            }}
          >
            Track Order
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="link"
            onClick={() => {
              setClick(false);
            }}
          >
            About Us
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={click ? ["fas", "times"] : ["fas", "bars"]}
        className="icon"
        onClick={() => {
          setClick(!click);
        }}
      />
    </nav>
  );
}

export default Navbar;
