import axios from "axios";
import { BASE_URL } from "../constants";

export const callLoginApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, payload);
    if (response.status !== 200) throw new Error("Request faild");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callJoinApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/join`, payload);
    if (response.status !== 201) throw new Error("Request faild");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
