import React, { useEffect, useState } from "react";
import { getCart, deleteCartItem } from "../data/cartAPI";

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
        // এখন userId সহ getCart কল দিচ্ছি
        const {data} = await getCart(userId);
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
      await deleteCartItem(userId, productId); // productId দিবে
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
    <div className="min-h-screen px-6 lg:px-[4vw] pt-[18vh] pb-[5vh] bg-milk text-dark-brown grid md:grid-cols-2 gap-8 lg:gap-[2.5vw]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

        {loading ? (
          <p>Loading...</p>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.product._id}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">
                      {item.product.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      ৳ {item.product.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-bold">
                    ৳ {item.product.price * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemove(item.product._id)}
                    className="text-red-500 hover:underline"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right text-2xl font-bold border-t pt-4">
              Total: ৳ {total}
            </div>

            <div className="text-right">
              <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
                Proceed to Checkout 🧾
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
