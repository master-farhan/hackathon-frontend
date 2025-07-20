import React from "react";
import { Link } from "react-router-dom";
// import { addToCart } from "../data/api";

const IceCreamCard = ({
  name,
  image,
  description,
  price,
  inStock,
  slug,
  category,
  _id,
}) => {
  const handleAddToCart = async () => {
    try {
      await addToCart({ id }); // pass MongoDB _id of ice cream
      alert("Added to cart");
    } catch (err) {
      console.error(err);
      alert("Failed to add");
    }
  };

  console.log(name, image , description, )

  return (
    <div
      className="transition-all hover:-translate-y-[2vh] duration-300 p-4 lg:p-[1.2vw] w-full"
    >
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
        <button
          onClick={handleAddToCart}
          className="h-8 w-25 lg:w-[7vw] flex-center lg:h-[2.5vw] text-xs lg:text-[.9vw] hover:text-sm lg:hover:text-[1vw] transition-all duration-300 rounded-full bg-primary text-white hover:bg-primary/90"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default IceCreamCard;
