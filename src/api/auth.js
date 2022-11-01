import axios from "axios";

const BASE_URL = "http://api.server.com";

export const auth = {
  login(payload) {
    return axios.post(`${BASE_URL}/login`, payload);
  },
  join(payload) {
    return axios.post(`${BASE_URL}/join`, payload);
  },
};
