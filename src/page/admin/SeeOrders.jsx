import React, { useEffect, useState } from "react";
import { getOrders, updateOrder, deleteOrder } from "../../data/orderAPI";
import { toast } from "react-toastify";

const SeeOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await getOrders();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrder(orderId, { status: newStatus });
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      toast.success("Order status updated");
    } catch (error) {
      console.error("Failed to update status", error);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (orderId) => {
    const confirm = window.confirm("Are you sure you want to delete this order?");
    if (!confirm) return;

    try {
      await deleteOrder(orderId);
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
      toast.success("Order deleted successfully");
    } catch (error) {
      console.error("Failed to delete order", error);
      toast.error("Failed to delete order");
    }
  };

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const groupItems = (items) => {
    const grouped = {};
    items.forEach((item) => {
      if (grouped[item.productId]) {
        grouped[item.productId].quantity += item.quantity;
      } else {
        grouped[item.productId] = { ...item };
      }
    });
    return Object.values(grouped);
  };

  if (loading) return <div className="p-4 lg:p-[2vw]">Loading orders...</div>;

  return (
    <div className="text-dark-brown">
      <h2 className="text-2xl lg:text-[1.7vw] font-bold mb-5 lg:mb-[1.5vw] text-primary">All Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm lg:text-[1vw] overflow-hidden">
          <thead className="bg-milk">
            <tr className="text-center">
              <th className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] text-primary">Order ID</th>
              <th className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] text-primary">User</th>
              <th className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] text-primary">Items</th>
              <th className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] text-primary">Total</th>
              <th className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] text-primary">Status</th>
              <th className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] text-primary">Date</th>
              <th className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] text-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-2 lg:py-[.5vw]">No orders found</td>
              </tr>
            ) : (
              orders.map((order) => {
                const groupedItems = groupItems(order.items);
                const total = groupedItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                );

                return (
                  <tr key={order._id} className="bg-milk hover:bg-primary/20 text-xs lg:text-[.9vw] text-center">
                    <td className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw]">{order._id}</td>
                    <td className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw]">
                      <div className="font-semibold">{order.name || "N/A"}</div>
                      <div>{order.phone}</div>
                      <div>{order.address}</div>
                      <div className="italic">{order.paymentMethod}</div>
                    </td>
                    <td className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw]">
                      {groupedItems.map((item, idx) => (
                        <div key={idx}>
                          {item.name} × {item.quantity}
                        </div>
                      ))}
                    </td>
                    <td className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw] font-semibold">৳{total}</td>
                    <td className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw]">
                      <select
                        value={order.status || "Pending"}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="rounded outline-0 text-dark"
                      >
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                      </select>
                    </td>
                    <td className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw]">{formatDate(order.createdAt)}</td>
                    <td className="px-2 py-5 border lg:px-[.4vw] lg:py-[.9vw]">
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="text-primary hover:text-primary/90 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeeOrders;
