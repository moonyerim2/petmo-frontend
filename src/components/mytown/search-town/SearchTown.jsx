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

  useEffect(() => {
    (async () => {
      if (ip) {
        const data = await callSearchTownApi({ ip });
        setSearchReasults(data);
      }
    })();
  }, [ip]);

  return (
    <>
      <AddressSearchBar setSearchReasults={setSearchReasults} />
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
