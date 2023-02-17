import axios from "axios";
import { BASE_URL } from "../constants";

export const callSingleImageUrlApi = async (imageId) => {
  try {
    const response = await axios.get(`${BASE_URL}/image/${imageId}`);

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callMultipleImageUrlApi = async (imageIds) => {
  try {
    const response = await imageIds.reduce(async (responses, imageId) => {
      const imageResponse = await callSingleImageUrlApi(imageId);
      return [...(await responses), imageResponse];
    }, []);

    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
