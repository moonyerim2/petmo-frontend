import axios from "axios";
import { BASE_URL } from "../constants";

export const callSearchTownApi = async (payload, signal) => {
  try {
    const response = await axios.post(`${BASE_URL}/search-town`, payload, {
      signal,
    });
    return response.data;
  } catch (error) {
    if (error.name === "AbortError") {
      return "Request Aborted";
    }
    console.log(error);
  }
};

export const callDeleteMyTownApi = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete-mytown`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const callRegisterMyTownApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/register-mytown`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
