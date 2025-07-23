import API from "./api";

// Register new user (matches POST /users)
export const registerUser = (data) => API.post("/users", data);

// Login user
export const loginUser = (data) => API.post("/users/login", data);

// Orders
export const getOrdersByUserId = (userId) =>
  API.get(`/orders?userId=${userId}`);
export const createOrder = (data) => API.post("/orders", data);

// CRUD operations
export const createUser = (data) => API.post("/users", data);
export const getUsers = () => API.get("/users");
export const getUserById = (id) => API.get(`/users/${id}`);
export const updateUser = (id, data) => API.patch(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
