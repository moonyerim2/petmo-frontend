import axios from "axios";
import { BASE_URL } from "../constants";

export const callSearchTownByQueryApi = async (query) => {
  try {
    const encodedUrl = encodeURI(
      `${BASE_URL}/users/address/get/query?q=?${query}`
    );
    const response = await axios.get(encodedUrl);
    return response.data;
  } catch (error) {
    if (error.name === "AbortError") {
      return "Request Aborted";
    }
    console.log(error);
    return error.response.status;
  }
};

export const callSearchTownByIpApi = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/users/address/get/ip`);
    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      return "Request Aborted";
    }
    console.log(error);
    return error.response;
  }
};

export const callDeleteMyTownApi = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/address`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const callRegisterMyTownApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/address`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};
