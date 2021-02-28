import React from "react";

function Bought(cart, size, color, product) {
  const data = {
    cart: cart,
    size: size,
    color: color,
    product: product,
  };

  async function SendData() {
    const res = await fetch("/bought", {
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

export default Bought;
