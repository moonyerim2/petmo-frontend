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

const closeSearchTownButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function AddressSearchBar({ searchTown, setIsSearchMode }) {
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
        style={addressSearchFieldStyle}
        onChange={onChange}
      />
    </Wrapper>
  );
}

AddressSearchBar.propTypes = {
  setIsSearchMode: PropTypes.func,
  searchTown: PropTypes.func,
};

export default AddressSearchBar;
