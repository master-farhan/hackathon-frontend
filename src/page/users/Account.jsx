import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrdersByUserId } from "../../data/userAPI";

const Account = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);

  // 🔐 Redirect if no user or user is admin
  useEffect(() => {
    if (!user) {
      navigate("/auth"); // Not logged in → go to auth page
    } else if (user.isAdmin) {
      navigate("/"); // Admin → go to home page
    }
  }, [user, navigate]);

  // 🧾 Fetch user's orders
  useEffect(() => {
    if (user?.id && user?.isAdmin === false) {
      getOrdersByUserId(user.id)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error("Failed to fetch orders", err));
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  if (!user || user.isAdmin) return null; // Prevents render if redirecting

  return (
    <section className="min-h-screen flex items-center justify-center bg-milk px-5 lg:px-[4vw] py-[15vh] text-dark-brown">
      <div className="bg-milk rounded-2xl py-8 lg:py-[2.5vw] w-full lg:w-[1/3] text-center">
        <h2 className="text-2xl lg:text-[2vw] font-bold text-dark-brown mb-4">
          Welcome, {user.name || "User"}!
        </h2>
        <p className="mb-6">
          Email:{" "}
          <span className="font-medium">{user.email || "Not Provided"}</span>
        </p>

        <div className="flex-center mb-5 lg:mb-[1.5vw]">
          <button
            onClick={handleLogout}
            className="h-8 w-25 lg:w-[7vw] flex-center lg:h-[2.5vw] text-xs lg:text-[.9vw] hover:text-sm lg:hover:text-[1vw] transition-all duration-300 rounded-full bg-primary text-white hover:bg-primary/90 cursor-pointer"
          >
            Logout
          </button>
        </div>

        <hr className="mb-6 lg:mb-[2vw]" />

        <h3 className="text-xl lg:text-[1.7vw] font-semibold lg:mb-[1vw] mb-3">
          Your Orders
        </h3>

        {orders.length === 0 ? (
          <p className="text-dark-brown/70">No orders found.</p>
        ) : (
          <ul className="space-y-4 lg:space-y-[1.4vw] text-left max-h-[30vh] overflow-y-auto px-2 lg:px-[1vw]">
            {orders.map((order) => (
              <li
                key={order.id}
                className="border p-4 rounded-md bg-gray-50 hover:bg-gray-100 transition"
              >
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-600">
                  Date: {new Date(order.date).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total: ${order.total}</p>
                <p className="text-sm text-gray-600">Status: {order.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Account;
