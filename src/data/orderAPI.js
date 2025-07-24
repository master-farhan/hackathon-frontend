import API from "./api";

// ✅ Create a new order
export const createOrder = (data) => API.post("/orders", data);

// ✅ Get all orders or filter by userId
export const getOrders = (userId) => {
  const url = userId ? `/orders?userId=${userId}` : "/orders";
  return API.get(url);
};

// ✅ Get a single order by ID
export const getOrderById = (id) => API.get(`/orders/${id}`);

// ✅ Update (patch) an order by ID — useful for updating status
export const updateOrder = (id, updates) => API.patch(`/orders/${id}`, updates);

// ✅ Delete an order by ID
export const deleteOrder = (id) => API.delete(`/orders/${id}`);
