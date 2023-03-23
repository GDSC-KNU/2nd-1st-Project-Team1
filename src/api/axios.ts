import axios from "axios";

const baseURL = process.env.SERVER_URL || "http://localhost:3000";

const clientApi = axios.create({
  baseURL,
});

// clientApi.interceptors.request.use((config) => {
//     config.headers.Authorization = "Bearer " + accessToken;
//     return config;
//   });
