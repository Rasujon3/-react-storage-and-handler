import React, { useEffect, useState } from "react";
import Cosmatic from "../Cosmatic/Cosmatic";

const Cosmatics = () => {
  const [cosmatics, setCosmatics] = useState([]);
  useEffect(() => {
    const url = `data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCosmatics(data));
  }, []);
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
