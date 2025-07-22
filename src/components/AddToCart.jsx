import React from "react";
import { addToCart } from "../data/cartAPI";

const AddToCart = ({ id: productId }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleAddToCart = async () => {
    if (!user?.id) {
      alert("Please login first.");
      return;
    }

    try {
      await addToCart(user.id, productId, 1);
      alert("✅ Added to cart");
    } catch (err) {
      console.error("Add to cart failed:", err);
      alert("❌ Failed to add to cart");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="h-8 w-25 lg:w-[7vw] flex-center lg:h-[2.5vw] text-xs lg:text-[.9vw] hover:text-sm lg:hover:text-[1vw] transition-all duration-300 rounded-full bg-primary text-white hover:bg-primary/90 cursor-pointer"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
