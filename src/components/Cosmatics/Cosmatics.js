import React from "react";
import Cosmatic from "../Cosmatic/Cosmatic";

const Cosmatics = () => {
  const cosmatics = [
    {
      id: "62377c4521e8974b50cc73b4",
      price: 543,
      eyeColor: "blue",
      name: "Drake Maldonado",
    },
    {
      id: "62377c4539d14188ce83b0dc",
      price: 443,
      eyeColor: "brown",
      name: "Potts Flynn",
    },
    {
      id: "62377c45661e9371a8985859",
      price: 153,
      eyeColor: "blue",
      name: "Celina Wells",
    },
    {
      id: "62377c45300bd5d99bf46362",
      price: 347,
      eyeColor: "blue",
      name: "Wooten Hughes",
    },
    {
      id: "62377c454e820c36ba85d69a",
      price: 226,
      eyeColor: "brown",
      name: "Leon Peters",
    },
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
