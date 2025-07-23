import React, { useEffect, useState } from "react";
import { getCart, deleteCartItem } from "../data/cartAPI";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
          alert("Please login first");
          setLoading(false);
          return;
        }
        const userId = user.id;
        const { data } = await getCart(userId);
        setCartItems(data.items || []);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      const userId = user.id;
      await deleteCartItem(userId, productId);
      setCartItems((prev) =>
        prev.filter((item) => item.product._id !== productId)
      );
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-5 lg:px-[4vw] pt-[20vh] pb-[5vh] bg-milk text-dark-brown grid gap-8 lg:gap-[2.5vw] relative">
      {/* left */}
      <div className="w-full mx-auto">
        {/* <h1 className="text-3xl lg:text-[2vw] font-bold mb-6 lg:mb-[2vw]">My Cart</h1> */}

        {loading ? (
          <p className="lg:text-[1.3vw]">Loading...</p>
        ) : cartItems.length === 0 ? (
          <p className="text-center lg:text-[1.2vw] text-dark-brown/70">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6 lg:space-y-[2vw] w-full">
            {cartItems.map((item) => (
              <div
                key={item.product._id}
                className="flex items-center justify-between bg-primary/5 p-3 lg:p-[1vw] rounded-xl w-full"
              >
                <div className="flex items-center gap-4 lg:gap-[1.3vw]">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-10 h-10 lg:w-[4vw] lg:h-[4vw] object-contain rounded-md"
                  />
                  <div>
                    <h2 className="text-base lg:text-[1.3vw] font-semibold">
                      {item.product.name}
                    </h2>
                    <p className="text-sm lg:text-[1vw] text-dark-brown/90">
                      ₹ {item.product.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 lg:gap-[1.3vw]">
                  <p className="text-base lg:text-[1.2vw] font-bold">
                    ₹ {item.product.price * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemove(item.product._id)}
                    className="text-primary lg:text-[1vw] hover:text-primary/80"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* right */}
      <div className="text-right w-full">
        <div className="text-xl lg:text-[1.5vw] pr-[1.5vw] lg:pr-[.5vw] font-bold">
          Total: ₹ {total}
        </div>
        <div className="flex justify-end">
          <Link
            to={`/orders/${cartItems
              .map((item) => item.product._id)
              .join(",")}`}
            className="h-8 w-43 mt-[.9vh] lg:w-[14vw] flex-center lg:h-[3vw] text-xs lg:text-[1vw] hover:text-sm lg:hover:text-[1.1vw] transition-all duration-300 rounded-full bg-primary text-milk hover:bg-primary/90 cursor-pointer"
          >
            Proceed to Checkout 🧾
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
