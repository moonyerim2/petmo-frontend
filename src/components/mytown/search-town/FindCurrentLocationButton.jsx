import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../common";
import { findCurrentLocationButtonProps } from "../../../constants";

const findCurrentLocationButtonStyle = ({
  colors,
  fontSizes,
  layout,
  borderRadiuses,
}) => {
  return {
    ...layout.flexCenter,
    minWidth: "320px",
    width: "100%",
    height: "46px",
    marginBottom: "24px",
    backgroundColor: colors["main"],
    fontSize: fontSizes.body2,
    borderRadius: borderRadiuses.small,
    color: colors.white,
    fontWeight: 700,
  };
};

function FindCurrentLocationButton({ searchTownByIp }) {
  const onClick = () => {
    searchTownByIp();
  };

  return (
    <>
      <Button
        {...findCurrentLocationButtonProps}
        onClick={onClick}
        style={findCurrentLocationButtonStyle}
      />
    </>
  );
}

FindCurrentLocationButton.propTypes = {
  searchTownByIp: PropTypes.func,
};

export default FindCurrentLocationButton;
