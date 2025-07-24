import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrders, deleteOrder } from "../../data/orderAPI";
import { getIceCreams } from "../../data/iceCreamAPI";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Account = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);
  const [icecreams, setIcecreams] = useState([]);

  // Redirect if no user or is admin
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else if (user.isAdmin) {
      navigate("/");
    }
  }, [user, navigate]);

  // Fetch user-specific orders
  useEffect(() => {
    if (user?.id && !user.isAdmin) {
      getOrders(user.id)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error("Failed to fetch orders", err));
    }
  }, [user]);

  // Fetch all ice creams for mapping
  useEffect(() => {
    getIceCreams()
      .then((res) => setIcecreams(res.data))
      .catch((err) => console.error("Failed to fetch icecreams", err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (!confirm) return;

    deleteOrder(id)
      .then(() => {
        setOrders((prev) => prev.filter((order) => order._id !== id));
      })
      .catch((err) => {
        console.error("Failed to delete order", err);
        alert("Something went wrong while cancelling the order.");
      });
  };

  const findIceCream = (id) => icecreams.find((ic) => ic._id === id);

  if (!user || user.isAdmin) return null;

  return (
    <section className="lg:min-h-screen w-full bg-milk flex items-center justify-center px-5 lg:px-[4vw] py-[15vh] text-dark-brown">
      <div className="bg-milk rounded-2xl py-8 lg:py-[2.5vw] w-full text-center">
        <h2 className="text-2xl lg:text-[2vw] font-bold text-dark-brown mb-4 lg:mb-[1.2vw]">
          Welcome, {user.name || "User"}!
        </h2>
        <p className="mb-6 lg:mb-[2vw] lg:text-[1.2vw]">
          Email:{" "}
          <span className="font-medium">{user.email || "Not Provided"}</span>
        </p>

        <div className="flex justify-center mb-5 lg:mb-[2vw]">
          <button
            onClick={handleLogout}
            className="h-8 px-6 lg:h-[2.5vw] lg:px-[2vw] text-sm lg:text-[.9vw] bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            Logout
          </button>
        </div>

        <hr className="mb-6 lg:mb-[2vw]" />

        <h3 className="text-xl lg:text-[1.7vw] font-semibold mb-4">
          Your Orders
        </h3>

        {orders.length === 0 ? (
          <p className="text-dark-brown/70 lg:text-[1.2vw]">No orders found.</p>
        ) : (
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Navigation]}
              navigation
              scrollbar={{ draggable: true }}
            >
              {orders.map((order) => (
                <SwiperSlide key={order._id}>
                  <div className="border w-full p-5 lg:p-[1vw] rounded-md bg-white shadow-md hover:bg-gray-50 transition">
                    <p className="font-semibold text-sm lg:text-[1vw] lg:mb-[.5vw] mb-2 text-left">
                      Order ID: {order._id}
                    </p>
                    <div className="flex gap-[.5vw] flex-col">
                      <div className="flex gap-[2vw]">
                        <p className="text-sm text-gray-700 font-semibold mb-2 text-left">
                          Items:
                        </p>
                        <ul className="space-y-2">
                          {order.items.map((item, idx) => {
                            const icecream = findIceCream(item.productId);
                            return (
                              <li key={idx} className="flex items-center gap-4">
                                {icecream?.image && (
                                  <img
                                    src={icecream.image}
                                    alt={icecream.name}
                                    className="w-12 h-12 rounded object-cover"
                                  />
                                )}
                                <div className="text-left">
                                  <p className="font-medium">
                                    {icecream?.name || "Unknown Icecream"}
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    Qty: {item.quantity} × ₹{item.price}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="text-red-500 text-sm mt-3 hover:underline"
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Account;
