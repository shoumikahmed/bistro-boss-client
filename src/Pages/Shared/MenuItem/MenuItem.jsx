import React from "react";

export default function MenuItem({ item }) {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-2 mt-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className=" w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}---------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
}
