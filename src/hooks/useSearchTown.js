import { useState, useEffect } from "react";
import { callSearchTownByIpApi, callSearchTownByQueryApi } from "../api";
import { useIp } from "../hooks";

const useSearchTown = () => {
  const ip = useIp();
  const [subTitle, setSubTitle] = useState("근처동네");
  const [searchResults, setSearchResults] = useState([]);

  const searchTownByIp = async (ip, signal) => {
    const data = await callSearchTownByIpApi({ ip }, signal);
    if (data !== 500) {
      setSearchResults(data);
      setSubTitle("근처동네");
    }
  };

  const searchTownByInput = async (input, signal) => {
    if (input.length < 2) {
      setSearchResults([]);
      return;
    }

    const data = await callSearchTownByQueryApi(input, signal);
    if (data !== 500) {
      setSearchResults(data);
      setSubTitle(`${input} 검색결과`);
    }
  };

  useEffect(() => {
    if (ip) {
      searchTownByIp(ip);
    }
  }, [ip]);

  return { subTitle, searchResults, ip, searchTownByIp, searchTownByInput };
};

export default useSearchTown;
