import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useDebouncedEffect } from "../../../hooks";
import { Button, TextField } from "../../common";
import {
  addressSearchFieldProps,
  closeSearchTownButtonProps,
} from "../../../constants";

const Wrapper = styled.div`
  ${({ theme: { layout, sizes } }) => css`
    ${{ ...layout.flexCenter, ...sizes.size1 }}
  `}
`;

const addressSearchFieldStyle = () => {
  return {
    width: "calc(100% - 34px)",
    marginLeft: "10px",
    padding: "10px 0 10px 10px",
  };
};

const closeSearchTownButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function AddressSearchBar({ searchTownByInput, setIsSearchMode }) {
  const [userInput, setUserInput] = useState(null);

  useDebouncedEffect(
    () => {
      if (userInput !== null) {
        searchTownByInput(userInput);
      }
    },
    500,
    [userInput]
  );

  const onChange = async ({ target }) => {
    setUserInput(target.value);
  };

  const onClick = () => {
    setIsSearchMode(false);
  };

  return (
    <Wrapper>
      <Button
        {...closeSearchTownButtonProps}
        onClick={onClick}
        style={closeSearchTownButtonStyle}
      />
      <TextField
        {...addressSearchFieldProps}
        inputStyle={addressSearchFieldStyle}
        onChange={onChange}
      />
    </Wrapper>
  );
}

AddressSearchBar.propTypes = {
  setIsSearchMode: PropTypes.func,
  searchTownByInput: PropTypes.func,
};

export default AddressSearchBar;
