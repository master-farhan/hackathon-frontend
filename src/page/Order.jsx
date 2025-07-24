import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createOrder } from "../data/orderAPI";
import { getIceCreamById } from "../data/iceCreamAPI";
import StripePopup from "../components/StripePopup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");
  const [showStripePopup, setShowStripePopup] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const ids = id.split(",");
      try {
        const products = await Promise.all(
          ids.map(async (productId) => {
            const { data } = await getIceCreamById(productId);
            return {
              ...data,
              quantity: 1,
            };
          })
        );
        setCartItems(products);
      } catch (error) {
        console.error("Failed to fetch product details", error);
        toast.error("Failed to load products. Please refresh.");
      }
    };
    fetchProducts();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePaymentToggle = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod === "Cash On Delivery") {
      await placeOrder("Cash On Delivery");
    } else {
      setShowStripePopup(true);
    }
  };

  const placeOrder = async (method = "Cash On Delivery") => {
    const userId = JSON.parse(localStorage.getItem("user"))?.id || 1;

    const orderData = {
      userId: userId,
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      address: formData.address,
      phone: formData.phone,
      paymentMethod: method,
    };

    try {
      await createOrder(orderData);
      toast.success(
        `Order placed successfully${method === "Stripe" ? " via Stripe" : ""}!`
      );
      setCartItems([]);
      setFormData({ name: "", address: "", phone: "" });
      setShowStripePopup(false);
      navigate("/account");
    } catch (err) {
      console.error("Order failed", err);
      toast.error("❌ Failed to place order. Please try again.");
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-6 lg:px-[4vw] pt-[18vh] pb-[5vh] bg-milk text-dark-brown grid md:grid-cols-2 gap-8 lg:gap-[2.5vw]">
      {/* Left: Form */}
      <div className="lg:w-full bg-milk p-6 lg:p-[2vw] rounded border border-primary/20 h-fit">
        <h2 className="text-2xl text-primary lg:text-[2vw] font-semibold mb-4 lg:mb-[2vw]">
          Complete Your Order
        </h2>

        {/* Payment Method Buttons */}
        <div className="flex gap-4 mb-6 lg:gap-[1.4vw] lg:mb-[2vw]">
          <button
            onClick={() => handlePaymentToggle("Cash On Delivery")}
            className={`flex items-center gap-2 px-4 py-2 lg:gap-[.5vw] lg:px-[1.4vw] lg:py-[.5vw] rounded-full border text-base lg:text-[1.2vw] ${
              paymentMethod === "Cash On Delivery"
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-white border-gray-300 text-gray-700"
            }`}
          >
            <span
              className={`h-3 w-3 lg:h-[1vw] lg:w-[1vw] rounded-full ${
                paymentMethod === "Cash On Delivery"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></span>
            Cash on Delivery
          </button>

          <button
            onClick={() => handlePaymentToggle("Stripe")}
            className={`flex items-center gap-2 px-4 py-2 lg:gap-[.5vw] lg:px-[1.4vw] lg:py-[.5vw] rounded-full border text-base lg:text-[1.2vw] ${
              paymentMethod === "Stripe"
                ? "bg-red-100 border-red-500 text-red-700"
                : "bg-white border-gray-300 text-gray-700"
            }`}
          >
            <span
              className={`h-3 w-3 lg:h-[1vw] lg:w-[1vw] rounded-full ${
                paymentMethod === "Stripe" ? "bg-red-500" : "bg-gray-300"
              }`}
            ></span>
            Stripe
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-[1.2vw]">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 lg:p-[.5vw] border border-primary outline-primary rounded lg:text-[1.2vw]"
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 lg:p-[.5vw] border border-primary outline-primary rounded lg:text-[1.2vw]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 lg:p-[.5vw] border border-primary outline-primary rounded lg:text-[1.2vw]"
          />
          <button
            type="submit"
            className="w-full bg-primary text-milk py-2 lg:py-[.5vw] rounded hover:bg-primary/90 lg:text-[1.2vw]"
          >
            {paymentMethod === "Stripe" ? "Pay Now" : "Place Order"}
          </button>
        </form>
      </div>

      {/* Right: Order Summary */}
      <div className="lg:w-full bg-milk h-fit  p-6 lg:p-[2vw] rounded border border-primary/20">
        <h2 className="text-2xl text-primary lg:text-[2vw] font-semibold mb-4 lg:mb-[2vw]">
          Order Summary
        </h2>
        {cartItems.length === 0 ? (
          <p className="lg:text-[1vw]">Loading your order...</p>
        ) : (
          <ul className="space-y-4 lg:space-y-[1.4vw]">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-primary pb-2 lg:pb-[.5vw] items-center"
              >
                <div>
                  <p className="font-semibold lg:text-[1.2vw]">{item.name}</p>
                  <p className="text-sm lg:text-[1vw] text-gray-600">
                    Qty: {item.quantity} × ₹{item.price}
                  </p>
                </div>
                <p className="font-semibold lg:text-[1.2vw] text-dark-brown">
                  ₹ {item.quantity * item.price}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/* Total */}
        <div className="mt-6 lg:mt-[2vw] pt-4 lg:pt-[1.4vw] gap-3 lg:gap-[1vw] flex items-center text-lg lg:text-[1.3vw] text-primary font-semibold">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Stripe Popup */}
      {showStripePopup && <StripePopup onClose={() => placeOrder("Stripe")} />}
    </div>
  );
};

export default Order;
