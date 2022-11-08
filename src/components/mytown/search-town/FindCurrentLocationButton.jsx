import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../common";
import { findCurrentLocationButtonProps } from "../../../constants";
import { callSearchTownApi } from "../../../api";

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

function FindCurrentLocationButton({ ip, setSearchReasults }) {
  const onClick = async () => {
    const data = await callSearchTownApi({ ip });
    setSearchReasults(data);
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
  ip: PropTypes.string,
  setSearchReasults: PropTypes.func,
};

export default FindCurrentLocationButton;
