import { axiosInstance as axios } from "./axios";
import { BASE_URL } from "../constants";
import { getCookie } from "../util";
export const callRegisterPetApi = async (payload) => {
  const csrftoken = getCookie("csrftoken");
  try {
    const response = await axios.post(`${BASE_URL}/users/animals`, payload, {
      headers: {
        "X-CSRFToken": csrftoken,
      },
    });

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
