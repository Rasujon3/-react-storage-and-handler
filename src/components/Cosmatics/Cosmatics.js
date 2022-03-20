import React from "react";
import Cosmatic from "../Cosmatic/Cosmatic";

const Cosmatics = () => {
  const cosmatics = [
    { id: 1, name: "Alta", price: 100 },
    { id: 2, name: "palis", price: 300 },
    { id: 3, name: "malis", price: 300 },
    { id: 4, name: "balis", price: 400 },
    { id: 5, name: "nalis", price: 500 },
  ];
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      {cosmatics.map((cosmatic) => (
        <Cosmatic key={cosmatic.id} cosmatic={cosmatic} />
      ))}
    </div>
  );
};

export default Cosmatics;
