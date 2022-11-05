import axios from "axios";

const BASE_URL = "http://api.server.com";

export const callHomeApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, payload);
    if (response.status !== 200) throw new Error("Request failed");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callLoginApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, payload);
    if (response.status !== 200) throw new Error("Request failed");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callJoinApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/join`, payload);
    if (response.status !== 201) throw new Error("Request failed");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
