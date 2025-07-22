import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createOrder } from "../data/userAPI"; // API function

const Order = () => {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCashOnDelivery = async (e) => {
    e.preventDefault();

    // Simulate userId from localStorage (replace with real user logic later)
    const userId = JSON.parse(localStorage.getItem("user"))?.id || 1;

    const orderData = {
      userId: userId,
      items: cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      address: formData.address,
      phone: formData.phone,
      paymentMethod: "Cash On Delivery",
    };

    try {
      await createOrder(orderData);
      alert("✅ Order placed successfully!");
      localStorage.removeItem("cart");
      setCartItems([]);
      setFormData({ name: "", address: "", phone: "" });
    } catch (err) {
      console.error("Order failed", err);
      alert("❌ Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen px-6 lg:px-[4vw] pt-[18vh] pb-[5vh] bg-milk text-dark-brown grid md:grid-cols-2 gap-8 lg:gap-[2.5vw]">
      {/* Left: Cash on Delivery Form */}
      <div className="lg:w-full bg-milk p-6 lg:p-[2vw] rounded shadow h-fit">
        <h2 className="text-2xl text-primary lg:text-[2vw] font-semibold mb-4 lg:mb-[2vw]">
          Cash on Delivery
        </h2>
        <form
          onSubmit={handleCashOnDelivery}
          className="space-y-4 lg:space-y-[1.2vw]"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 lg:p-[.7vw] border-primary outline-primary lg:text-[1.2vw] border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 lg:p-[.7vw] border-primary outline-primary lg:text-[1.2vw] border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 lg:p-[.7vw] border-primary outline-primary lg:text-[1.2vw] border rounded"
          />
          <button
            type="submit"
            className="w-full bg-primary text-milk py-2 lg:text-[1.2vw] lg:py-[.9vw] rounded hover:bg-primary/90"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Right: Cart Summary */}
      <div className="lg:w-full bg-milk p-6 lg:p-[2vw] rounded shadow">
        <div className="">
          <h2 className="text-2xl text-primary lg:text-[2vw] font-semibold mb-4 lg:mb-[2vw]">
            Your Order Summary
          </h2>
          {cartItems.length === 0 ? (
            <p className="lg:text-[1vw]">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity || 1}
                    </p>
                  </div>
                  <p>${item.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
