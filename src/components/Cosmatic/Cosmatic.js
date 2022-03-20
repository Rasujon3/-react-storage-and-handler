import React from "react";
import { addToDb } from "../utilities/fakedb";
import "./Cosmatic.css";

const Cosmatic = (props) => {
  //   console.log(props.cosmatic);
  const { name, price, id } = props.cosmatic;

  const addToCart = (id) => {
    addToDb(id);
  };

  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>it ha id : {id}</small>
      </p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Cosmatic;
