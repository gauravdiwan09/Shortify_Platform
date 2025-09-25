import axios from "axios";

const API = axios.create({
  baseURL: "https://shortify-platform-3.onrender.com/api", // <- updated URL
});

// Add Authorization header if token exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
