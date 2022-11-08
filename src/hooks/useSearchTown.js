import { useState, useEffect } from "react";
import { callSearchTownApi } from "../api";
import { useIp } from "../hooks";

const useSearchTown = () => {
  const ip = useIp();
  const [subTitle, setSubTitle] = useState("근처동네");
  const [searchResults, setSearchResults] = useState([]);

  const searchTownByIp = async (ip, signal) => {
    const data = await callSearchTownApi({ ip }, signal);
    setSearchResults(data);
    setSubTitle("근처동네");
  };

  const searchTownByInput = async (input, signal) => {
    if (input === "") {
      setSearchResults([]);
      return;
    }

    const data = await callSearchTownApi({ input }, signal);
    setSearchResults(data);
    setSubTitle(`${input} 검색결과`);
  };

  useEffect(() => {
    if (ip) {
      searchTownByIp({ ip });
    }
  }, [ip]);

  return { subTitle, searchResults, ip, searchTownByIp, searchTownByInput };
};

export default useSearchTown;
