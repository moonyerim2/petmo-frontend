import axios from "axios";
import { BASE_URL } from "../constants";

export const callLoginApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/sign-in`, payload);
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
    const response = await axios.post(`${BASE_URL}/join`, payload);
    if (response.status !== 201) throw new Error("Request faild");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callGetUserApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    if (response.status !== 200) throw new Error("Request faild");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
