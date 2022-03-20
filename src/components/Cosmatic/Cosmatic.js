import React from "react";

const Cosmatic = (props) => {
  console.log(props.cosmatic);
  const { name, price, id } = props.cosmatic;
  return (
    <div>
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>it ha id : {id}</small>
      </p>
    </div>
  );
};

export default Cosmatic;
