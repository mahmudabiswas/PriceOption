import React from "react";

const PriceOptions = ({ option }) => {
  const { name, description, price, features } = option;
  return (
    <div className=" bg-yellow-400 text-black p-6 flex-grow ">
      <p className="text-6xl"> {price} </p>
      <h1> {name} </h1>
      <p> {description} </p>

      <div className="">
        {features.map((item) => (
          <p> {item.slice(0, 10)} </p>
        ))}
        <button className="btn btn-secondary w-full mt-2">Selected</button>
      </div>
    </div>
  );
};

export default PriceOptions;
