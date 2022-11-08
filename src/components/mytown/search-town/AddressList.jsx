import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

const AddressItem = styled.li`
  ${({ theme: { fontSizes, colors } }) =>
    css`
      ${{
        display: "flex",
        alignItems: "center",
        height: "46px",
        fontSize: fontSizes.body2,
        borderBottom: `1px solid ${colors.lineMedium}`,
      }}
    `}
`;

function AddressList({ searchResults }) {
  return (
    <ul>
      {searchResults.map(({ id, town }) => (
        <AddressItem key={id}>{town}</AddressItem>
      ))}
    </ul>
  );
}

AddressList.prototypes = {
  searchResults: PropTypes.array,
};

export default AddressList;
