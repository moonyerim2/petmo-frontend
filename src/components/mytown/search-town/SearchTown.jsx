import React from "react";
import { SubTitle2 } from "../../../styled";
import FindCurrentLocationButton from "./FindCurrentLocationButton";
import AddressList from "./AddressList";
import AddressSearchBar from "./AddressSearchBar";

function SearchTown() {
  return (
    <>
      <AddressSearchBar />
      <FindCurrentLocationButton />
      <SubTitle2>근처동네</SubTitle2>
      <AddressList />
    </>
  );
}

export default SearchTown;
