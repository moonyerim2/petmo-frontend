import React from "react";
import styled, { css } from "styled-components";
import { TextField, GoBackButton } from "../../common";
import { addressSearchFieldProps } from "../../../constants";

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

function AddressSearchBar() {
  return (
    <Wrapper>
      <GoBackButton />
      <TextField {...addressSearchFieldProps} style={addressSearchFieldStyle} />
    </Wrapper>
  );
}

export default AddressSearchBar;
