import API from "./api";

// Get all
export const getIceCreams = () => API.get("/icecreams");

// Get single
export const getIceCreamById = (id) => API.get(`/icecreams/${id}`);

// Create
export const createIceCream = (data) => API.post("/icecreams", data);

// Update
export const updateIceCream = (id, iceCreamData) =>
  API.patch(`/icecreams/${id}`, iceCreamData);

// Delete
export const deleteIceCream = (id) => API.delete(`/icecreams/${id}`);
