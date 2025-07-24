// data/orderAPI.js
import API from "./api";

export const createOrder = (data) => API.post("/orders", data);

export const getOrders = (userId) => {
  const url = userId ? `/orders?userId=${userId}` : "/orders";
  return API.get(url);
};
export const getOrderById = (id) => API.get(`/orders/${id}`);
export const updateOrder = (id, updates) => API.patch(`/orders/${id}`, updates);
export const deleteOrder = (id) => API.delete(`/orders/${id}`);
