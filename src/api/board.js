import { axiosInstance as axios } from "./axios";
import { BASE_URL } from "../constants";
import { getCookie } from "../util";
export const callSinglePostApi = async (postId) => {
  try {
    const response = await axios.get(`/posts/${postId}`);

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

// export const callPostsApi = async ({
//   boardAddress,
//   animalTypes,
//   categoryType,
//   lastBoardId,
// }) => {
//   try {
//     const encodedUrl = encodeURI(
//       `${BASE_URL}/posts/list?boardAddress=${boardAddress}&animalTypes=${animalTypes}&categoryType=${categoryType}&lastBoardId=${lastBoardId}`
//     );

//     const response = await axios.get(encodedUrl);

//     if (response.status !== 200) throw new Error("Request faild");
//     return response;
//   } catch (error) {
//     console.log(error);
//     return error.response;
//   }
// };
export const callPostsApi = async (payload) => {
  const csrftoken = getCookie("csrftoken");
  console.log(csrftoken);
  try {
    const response = await axios.post(`/posts/`, payload, {
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

export const callLikeApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/likes/post`, payload);

    if (response.status !== 200 || response.status !== 201)
      throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callBookmarkApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/bookmarks`, payload);

    if (response.status !== 200 || response.status !== 201)
      throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
