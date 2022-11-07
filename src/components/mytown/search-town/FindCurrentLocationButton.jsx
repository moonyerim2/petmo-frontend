import React from "react";
import { Button } from "../../common";
import { findCurrentLocationButtonProps } from "../../../constants";

const findCurrentLocationButtonStyle = ({
  colors,
  fontSizes,
  layout,
  borderRadius,
}) => {
  return {
    ...layout.flexCenter,
    minWidth: "320px",
    width: "100%",
    height: "46px",
    marginBottom: "24px",
    backgroundColor: colors["main"],
    fontSize: fontSizes.body2,
    borderRadius: borderRadius.small,
    color: colors.white,
    fontWeight: 700,
  };
};

function FindCurrentLocationButton() {
  return (
    <Button
      {...findCurrentLocationButtonProps}
      style={findCurrentLocationButtonStyle}
    />
  );
}

export default FindCurrentLocationButton;
