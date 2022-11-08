import React, { useState } from "react";
import { SubTitle2 } from "../../../styled";
import FindCurrentLocationButton from "./FindCurrentLocationButton";
import AddressList from "./AddressList";
import AddressSearchBar from "./AddressSearchBar";

function SearchTown() {
  const [searchResults, setSearchReasults] = useState([
    { id: 1, town: "시흥시" },
    { id: 2, town: "달서구" },
    { id: 3, town: "남구" },
    { id: 4, town: "서구" },
    { id: 5, town: "동구" },
    { id: 6, town: "송파구" },
    { id: 7, town: "구로구" },
  ]);

  return (
    <>
      <AddressSearchBar setSearchReasults={setSearchReasults} />
      <FindCurrentLocationButton setSearchReasults={setSearchReasults} />
      <SubTitle2>근처동네</SubTitle2>
      <AddressList searchResults={searchResults} />
    </>
  );
}

export default SearchTown;
