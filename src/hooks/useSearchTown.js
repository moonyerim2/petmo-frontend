import { useState, useEffect } from "react";
import { callSearchTownByIpApi, callSearchTownByQueryApi } from "../api";

const useSearchTown = () => {
  const [subTitle, setSubTitle] = useState("근처동네");
  const [searchResults, setSearchResults] = useState([]);

  const searchTownByIp = async () => {
    const response = await callSearchTownByIpApi();
    if (response.status !== 500) {
      setSearchResults(response.data);
      setSubTitle("근처동네");
    }
  };

  const searchTownByInput = async (input) => {
    if (input.length < 2) {
      setSearchResults([]);
      return;
    }

    const data = await callSearchTownByQueryApi(input);
    if (data !== 500) {
      setSearchResults(data);
      setSubTitle(`${input} 검색결과`);
    }
  };

  useEffect(() => {
    searchTownByIp();
  }, []);

  return { subTitle, searchResults, searchTownByIp, searchTownByInput };
};

export default useSearchTown;
