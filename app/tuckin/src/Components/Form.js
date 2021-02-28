import React from "react";
import "./Form.css";

function Form({ width = false }) {
  const [buttons, setButtons] = React.useState({ submit: 0 });
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");

  async function sendData() {
    const res = await fetch("/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        submit: buttons.submit,
        email: email,
        number: number,
        test: "this is test message",
      }),
    });
    res.json().then((info) => {
      console.log(info);
    });
  }

  // React.useEffect(() => {
  //   sendData();
  // }, []);

  async function handleSubmit(event) {
    const clicks = buttons.submit + 1;
    setButtons({ submit: clicks });
    sendData();
    event.preventDefault();
  }

  function handleChange(event) {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else {
      setNumber(event.target.value);
    }
  }

  return (
    <div className="form-container">
      <form>
        <div className="row">
          <div className="col-25">
            <label className="email-text" for="fname"></label>
          </div>
          <div className="col-75">
            <input
              className="input-one"
              style={
                width
                  ? { width: "200px", marginRight: "70px" }
                  : { width: "250px", marginRight: "80px", marginLeft: "auto" }
              }
              type="email"
              id="fname"
              name="email"
              value={email}
              placeholder="  Enter your name here"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className="number-text" for="fname"></label>
          </div>
          <div className="col-75">
            <input
              className="input-one"
              style={
                width
                  ? { width: "200px", marginRight: "70px" }
                  : { width: "250px", marginRight: "80px", marginLeft: "auto" }
              }
              type="number"
              id="fname"
              name="firstname"
              value={number}
              placeholder="  +91.."
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
        </div>
        <input
          type="submit"
          className="submit"
          onClick={(event) => handleSubmit(event)}
        />
      </form>
    </div>
  );
}

export default Form;
