import axios from "axios";
import { BASE_URL } from "../constants";

export const callSinglePostApi = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/board/${postId}`);

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callPostsApi = async ({
  boardAddress,
  animalTypes,
  categoryType,
  lastBoardId,
}) => {
  try {
    const encodedUrl = encodeURI(
      `${BASE_URL}/board/list?boardAddress=${boardAddress}&animalTypes=${animalTypes}&categoryType=${categoryType}&lastBoardId=${lastBoardId}`
    );

    const response = await axios.get(encodedUrl);

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callLikeApi = async (method, boardId) => {
  try {
    const response = await axios[method](`${BASE_URL}/like/${boardId}`);

    if (response.status !== 200 || response.status !== 201)
      throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callBookmarkApi = async (method, boardId) => {
  try {
    const response = await axios[method](`${BASE_URL}/bookmark/${boardId}`);

    if (response.status !== 200 || response.status !== 201)
      throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
