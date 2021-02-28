import React from "react";

function Send(page, buttonName) {
  const data = {
    pageName: page,
    ButtonName: buttonName,
  };

  async function SendData() {
    const res = await fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data: data,
        test: "this is test message",
      }),
    });
    res.json().then((info) => {
      console.log(info);
    });
  }

  SendData();
}

export default Send;
