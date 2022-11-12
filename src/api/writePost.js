import axios from "axios";
import { BASE_URL } from "../constants";

export const callRegisterPostApi = async (payload) => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `${BASE_URL}/registerPost`,
      method: "POST",
      data: payload,
    });

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
