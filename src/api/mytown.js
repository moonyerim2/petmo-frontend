import axios from "axios";
import { BASE_URL } from "../constants";

export const callSearchTownApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/search-town`, payload);
    return response.data;
  } catch (error) {
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
