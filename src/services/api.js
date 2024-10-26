import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Interceptor para incluir el token en las cabeceras de cada solicitud
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
