import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <section className="coin">
      <h1>Name: {name}</h1>
      <img src={icon} alt="" />
      <h2>Price: {price}</h2>
      <h3>Symbol: {symbol}</h3>
    </section>
  );
}

export default Coin;
