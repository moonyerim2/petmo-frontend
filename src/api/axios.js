import axios from "axios";
import { BASE_URL } from "../constants";
import { getCookie } from "../util";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": getCookie("csrftoken") || "",
  },
});
