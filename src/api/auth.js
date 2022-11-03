import axios from "axios";

const BASE_URL = "http://api.server.com";

const fetch = async (endPoint, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}${endPoint}`, payload);
    if (response.statusText !== "OK") throw new Error("Request faild");
    return response.data || response.json();
  } catch (error) {
    console.log(error);
  }
};

export const callLoginApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, payload);
    if (response.status !== 200) throw new Error("Request faild");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callJoinApi = async (payload) => {
  return await fetch("/join", payload);
};
