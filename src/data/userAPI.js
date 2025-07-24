// data/userAPI.js
import API from "./api";

export const registerUser = (data) => API.post("/users", data);
export const loginUser = (data) => API.post("/users/login", data);

export const createUser = (data) => API.post("/users", data);
export const getUsers = () => API.get("/users");
export const getUserById = (id) => API.get(`/users/${id}`);
export const updateUser = (id, data) => API.patch(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
