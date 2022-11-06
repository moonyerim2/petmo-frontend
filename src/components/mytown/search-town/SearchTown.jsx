import React from "react";
import { TextField, Button } from "../../common";
import { SubTitle2 } from "../../../styled";
import { findCurrentLocationButtonProps } from "../../../constants";

const findCurrentLocationButtonStyle = ({
  colors,
  fontSizes,
  common,
  borderRadius,
}) => {
  return {
    ...common.buttonSize,
    ...common.flexCenter,
    backgroundColor: colors["main"],
    fontSize: fontSizes.body2,
    borderRadius: borderRadius.small,
    color: colors.white,
  };
};

function SearchTown() {
  return (
    <>
      <Button />
      <TextField />
      <Button
        {...findCurrentLocationButtonProps}
        style={findCurrentLocationButtonStyle}
      />
      <SubTitle2>근처동네</SubTitle2>
      <ul>
        <li>경기도 시흥시</li>
        <li>경기도 시흥시</li>
        <li>경기도 시흥시</li>
        <li>경기도 시흥시</li>
        <li>경기도 시흥시</li>
      </ul>
    </>
  );
}

export default SearchTown;
