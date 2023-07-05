import { axiosInstance as axios } from "./axios";
import { BASE_URL } from "../constants";

export const callRegisterPostApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/board/add`, payload);
    if (response.status !== 201) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
