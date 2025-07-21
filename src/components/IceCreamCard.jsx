import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
// import { addToCart } from "../data/api";

const IceCreamCard = ({
  name,
  image,
  description,
  price,
  stock,
  isAvilable,
  category,
  _id,
}) => {
  return (
    <div className="transition-all hover:-translate-y-[2vh] duration-300 p-4 lg:p-[1.2vw] w-full">
      <Link to={`/flavors/${_id}`}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-[30vh] object-contain"
        />
      </Link>

      <p className="text-xs lg:text-[.9vw] text-gray-400 my-2 lg:my-[.5vw] capitalize">
        Category: {category}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-base lg:text-[1.3vw] font-bold text-primary">
          ₹{price}
        </span>
        <AddToCart id={_id} />
      </div>
    </div>
  );
};

export default IceCreamCard;
