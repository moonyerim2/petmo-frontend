import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { TextField, GoBackButton } from "../../common";
import { addressSearchFieldProps } from "../../../constants";
import { useDebouncedEffect } from "../../../hooks";

const Wrapper = styled.div`
  ${({ theme }) => css`
    ${{ ...theme.layout.flexCenter, ...theme.size.bigButtonSize }}
  `}
`;

const addressSearchFieldStyle = () => {
  return {
    width: "calc(100% - 34px)",
    marginLeft: "10px",
    padding: "10px 0 10px 10px",
  };
};

function AddressSearchBar({ searchTown }) {
  const [userInput, setUserInput] = useState("");

  useDebouncedEffect(
    () => {
      const abortController = new AbortController();
      searchTown({ input: userInput }, abortController.signal);
      return () => {
        abortController.abort();
      };
    },
    500,
    [userInput]
  );

  const onChange = async ({ target }) => {
    setUserInput(target.value);
  };

  return (
    <Wrapper>
      <GoBackButton />
      <TextField
        {...addressSearchFieldProps}
        style={addressSearchFieldStyle}
        onChange={onChange}
      />
    </Wrapper>
  );
}

AddressSearchBar.propTypes = {
  searchResults: PropTypes.array,
  searchTown: PropTypes.func,
};

export default AddressSearchBar;
