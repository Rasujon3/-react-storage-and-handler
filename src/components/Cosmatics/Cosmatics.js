import React, { useEffect, useState } from "react";
import Cosmatic from "../Cosmatic/Cosmatic";
import { getTotal } from "../utilities/calculate";

const Cosmatics = () => {
  const [cosmatics, setCosmatics] = useState([]);
  useEffect(() => {
    const url = `data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCosmatics(data));
  }, []);
  const total = getTotal(cosmatics);
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      <p>Money Needed: {total} tk</p>
      {cosmatics.map((cosmatic) => (
        <Cosmatic key={cosmatic.id} cosmatic={cosmatic} />
      ))}
    </div>
  );
};

export default Cosmatics;
