import axios from "axios";

const getBaseURL = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && !envUrl.includes("your-backend-name")) {
    return envUrl;
  }
  return "https://online-assessment-and-contest-platform.onrender.com/api";
};

const api = axios.create({
  baseURL: getBaseURL(),
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export default api;