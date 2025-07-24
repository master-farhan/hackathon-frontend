// src/data/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://hackathon-backend-zky6.onrender.com/",
});

// http://localhost:3000

export default API;
