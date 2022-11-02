import axios from "axios";

const BASE_URL = "http://api.server.com";

export const callLoginApi = (payload) => {
  return axios.post(`${BASE_URL}/login`, payload);
};
export const callJoinApi = (payload) => {
  return axios.post(`${BASE_URL}/join`, payload);
};
