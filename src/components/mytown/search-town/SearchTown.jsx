import React from "react";
import PropTypes from "prop-types";
import { SubTitle2 } from "../../../styled";
import FindCurrentLocationButton from "./FindCurrentLocationButton";
import AddressList from "./AddressList";
import AddressSearchBar from "./AddressSearchBar";
import { useSearchTown } from "../../../hooks";

function SearchTown({ setIsSearchMode }) {
  const { subTitle, searchResults, ip, setSearchResults, searchTownByInput } =
    useSearchTown();

  return (
    <>
      <AddressSearchBar
        searchTownByInput={searchTownByInput}
        setIsSearchMode={setIsSearchMode}
      />
      <FindCurrentLocationButton ip={ip} setSearchReasults={setSearchResults} />
      <SubTitle2>{subTitle}</SubTitle2>
      <AddressList
        searchResults={searchResults}
        setIsSearchMode={setIsSearchMode}
      />
    </>
  );
}

SearchTown.propTypes = {
  setIsSearchMode: PropTypes.func,
};

export default SearchTown;
