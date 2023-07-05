import { axiosInstance as axios } from "./axios";
import { BASE_URL } from "../constants";

export const callUploadImageApi = async (payload) => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `${BASE_URL}/image/upload`,
      method: "POST",
      data: payload,
    });

    if (response.status !== 201) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

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
