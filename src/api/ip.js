import { axiosInstance as axios } from "./axios";

export const callGetIpApi = async () => {
  try {
    const response = await axios.get("https://api.ipify.org/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
