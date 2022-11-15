import axios from "axios";
import { BASE_URL } from "../constants";

export const callRegisterPetApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/animals`, payload);

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
