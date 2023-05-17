import axios from "axios";

const baseURL =
  "http://canigraduate.duckdns.org/api" || "http://localhost:3000";

const clientApi = axios.create({
  baseURL,
});

// clientApi.interceptors.request.use((config) => {
//     config.headers.Authorization = "Bearer " + accessToken;
//     return config;
//   });

export default clientApi;
