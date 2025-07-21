import API from "./api";

// Add to cart
export const addToCart = (userId, productId, quantity = 1) =>
  API.post("/cart", { userId, productId, quantity });

// Get cart by user ID
export const getCart = (userId) => API.get(`/cart/${userId}`);

// Update quantity of a cart item
export const updateCartItem = (userId, productId, quantity) =>
  API.patch(`/cart/${userId}`, { productId, quantity });

// Delete an item from cart
export const deleteCartItem = (userId, productId) =>
  API.delete(`/cart/${userId}/${productId}`);
