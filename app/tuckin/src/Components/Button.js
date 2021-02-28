import React from "react";
import "./Button.css";

function Button({ name, active }) {
  const [style, setStyle] = React.useState({
    backgroundColor: "none",
    color: "black",
  });

  function checkStatus() {
    if (active === "true") {
      setStyle({
        backgroundColor: "grey",
        color: "white",
      });
    } else {
      setStyle({
        backgroundColor: "#f5f3eb",
        color: "black",
      });
    }
  }

  // function handleClick() {
  //   if (style.color === "black") {
  //     setStyle({
  //       backgroundColor: "grey",
  //       color: "white",
  //     });
  //   } else {
  //     setStyle({
  //       backgroundColor: "#f5f3eb",
  //       color: "black",
  //     });
  //   }
  // }
  // React.useEffect(() => checkStatus(), []);

  return (
    <button
      className="button"
      onClick={() => {
        console.log("yes");
      }}
    >
      {name}
    </button>
  );
}

export default Button;
