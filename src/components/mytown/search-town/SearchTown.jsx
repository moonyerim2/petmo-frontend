import React, { useState, useEffect } from "react";
import { SubTitle2 } from "../../../styled";
import FindCurrentLocationButton from "./FindCurrentLocationButton";
import AddressList from "./AddressList";
import AddressSearchBar from "./AddressSearchBar";
import { useIp } from "../../../hooks";
import { callSearchTownApi } from "../../../api";

function SearchTown() {
  const ip = useIp();
  const [searchResults, setSearchReasults] = useState([]);

  const searchTown = async (payload, signal) => {
    const data = await callSearchTownApi(payload, signal);
    setSearchReasults(data);
  };

  useEffect(() => {
    if (ip) {
      searchTown({ ip });
    }
  }, [ip]);

  return (
    <>
      <AddressSearchBar searchTown={searchTown} />
      <FindCurrentLocationButton
        ip={ip}
        setSearchReasults={setSearchReasults}
      />
      <SubTitle2>근처동네</SubTitle2>
      <AddressList searchResults={searchResults} />
    </>
  );
}

export default SearchTown;
