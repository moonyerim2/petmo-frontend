import React from "react";
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

function AddressList() {
  return (
    <ul>
      <AddressItem>경기도 시흥시</AddressItem>
      <AddressItem>경기도 시흥시</AddressItem>
      <AddressItem>경기도 시흥시</AddressItem>
      <AddressItem>경기도 시흥시</AddressItem>
      <AddressItem>경기도 시흥시</AddressItem>
    </ul>
  );
}

export default AddressList;
