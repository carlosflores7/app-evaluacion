import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5001/api",
  baseURL:
    "https://api-evaluacion2-40p6jursv-jorge-edgar-rojas-projects.vercel.app",
});

export default api;
