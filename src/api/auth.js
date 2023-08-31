import { axiosInstance as axios } from "./axios";
import { BASE_URL } from "../constants";

export const callHomeApi = async (payload) => {
  try {
    const response = await axios.post(`/`, payload);
    if (response.status !== 200) throw new Error("Request failed");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callLoginApi = async (payload) => {
  try {
    const response = await axios.post(`/auths/sign-in`, payload);
    if (response.status !== 200) throw new Error("Request faild");
    return response.status;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

export const callSocialLoginApi = async (type) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/oauth2/authorization/${type}`
    );
    if (response.status !== 302) throw new Error("Request faild");
    return response.status;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

export const callJoinApi = async (payload) => {
  try {
    const response = await axios.post(`/auths/sign-up`, payload);
    if (response.status !== 201) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callGetUserApi = async () => {
  try {
    const response = await axios.get(`/users/static-info`);
    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
