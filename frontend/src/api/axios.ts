import axios from "axios";
const BASE_URL = "http://localhost:3000";

const DeployedURL = "https://api-hunt.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
