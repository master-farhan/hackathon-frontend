// src/data/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

// Get all ice creams
export const getIceCreams = () => API.get("/icecreams");

// Get single ice cream by ID
export const getIceCreamById = (id) => API.get(`/icecreams/${id}`);

// Create new ice cream
export const createIceCream = (data) => API.post("/icecreams", data);

// Update ice cream by ID (PATCH)
export const updateIceCream = (id, data) => API.patch(`/icecreams/${id}`, data);

// Delete ice cream by ID
export const deleteIceCream = (id) => API.delete(`/icecreams/${id}`);
