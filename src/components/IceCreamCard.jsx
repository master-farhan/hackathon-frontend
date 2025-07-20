import React from "react";
import { Link } from "react-router-dom";

const IceCreamCard = ({
  name,
  image,
  description,
  price,
  inStock,
  slug,
  category,
  id,
}) => {
  return (
    <Link
      to={`/flavors/${slug + "-" + id}`}
      className="transition-all hover:-translate-y-[2vh] duration-300 p-4 lg:p-[1.2vw] w-full"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-[30vh] object-contain"
      />

      <div className="flex items-center justify-between mt-3 lg:mt-[1vw]">
        <span className="text-base lg:text-[1.3vw] font-bold text-primary">
          ₹{price}
        </span>
        {inStock ? (
          <Link
            to={"/order"}
            className="h-8 w-25 lg:w-[7vw] flex-center lg:h-[2.5vw] text-xs lg:text-[.9vw] hover:text-sm lg:hover:text-[1vw] transition-all duration-300 rounded-full bg-primary text-white hover:bg-primary/90"
          >
            Order Now
          </Link>
        ) : (
          <span className="h-8 w-25 lg:w-[7vw] flex-center lg:h-[2.5vw] text-xs lg:text-[.9vw] bg-dark-brown/10 rounded-full">
            Out of Stock
          </span>
        )}
      </div>

      <div className="text-xs lg:text-[.9vw] text-gray-400 mt-1 lg:mt-[.2vw] capitalize">
        Category: {category}
      </div>
    </Link>
  );
};

export default IceCreamCard;
