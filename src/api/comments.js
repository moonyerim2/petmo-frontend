import axios from "axios";
import { BASE_URL } from "../constants";

export const callCommentsApi = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/comments/${postId}`);

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
