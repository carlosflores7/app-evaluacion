import axios from "axios";

const api = axios.create({
  baseURL: "https://fast-api-six-roan.vercel.app", // Nueva dirección base
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