import axios from "axios";
import { BASE_URL } from "../constants";

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
