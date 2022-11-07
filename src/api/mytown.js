import axios from "axios";
import { BASE_URL } from "../constants";

export const callGetMytownApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mytown`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
