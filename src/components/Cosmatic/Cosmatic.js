import React from "react";
import "./Cosmatic.css";

const Cosmatic = (props) => {
  //   console.log(props.cosmatic);
  const { name, price, id } = props.cosmatic;

  const addToCart = (id) => {
    console.log("item added", id);
  };

  const addtoCartWithParam = () => {
    addToCart(id);
  };
  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>it ha id : {id}</small>
      </p>
      <button onClick={addtoCartWithParam}>Add to Cart</button>
      <button onClick={() => addToCart(id)}>Add to Cart: shortcut</button>
    </div>
  );
};

export default Cosmatic;
