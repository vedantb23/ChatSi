import axios from "axios";
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://chatsi-backed.onrender.com/api";
export const axiosInstance = axios.create({
    baseURL: apiUrl,
    withCredentials:true,
});