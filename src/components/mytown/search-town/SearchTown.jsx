import React from "react";
import PropTypes from "prop-types";
import { SubTitle2 } from "../../../styled";
import FindCurrentLocationButton from "./FindCurrentLocationButton";
import AddressList from "./AddressList";
import AddressSearchBar from "./AddressSearchBar";
import NotFoundTown from "./NotFoundTown";
import { useSearchTown } from "../../../hooks";

function SearchTown({ setIsSearchMode }) {
  const { subTitle, searchResults, searchTownByIp, searchTownByInput } =
    useSearchTown();

  return (
    <>
      <AddressSearchBar
        searchTownByInput={searchTownByInput}
        setIsSearchMode={setIsSearchMode}
      />
      <FindCurrentLocationButton searchTownByIp={searchTownByIp} />
      {!searchResults.length ? (
        <NotFoundTown />
      ) : (
        <>
          <SubTitle2>{subTitle}</SubTitle2>
          <AddressList
            searchResults={searchResults}
            setIsSearchMode={setIsSearchMode}
          />
        </>
      )}
    </>
  );
}

SearchTown.propTypes = {
  setIsSearchMode: PropTypes.func,
};

export default SearchTown;
