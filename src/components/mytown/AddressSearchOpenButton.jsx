import React from "react";
import PropTypes from "prop-types";
import { Button } from "..";
import { addressSearchOpenButtonProps } from "../../constants";

const addressSearchOpenButtonStyle = ({ colors, common, borderRadius }) => {
  return {
    ...common.flex_aCenter_jBetween,
    ...common.buttonSize,
    padding: "16px 16px 16px 12px",
    border: `1px solid ${colors.gray400}`,
    borderRadius: borderRadius.small,
    color: colors.gray600,
  };
};

function AddressSearchOpenButton({ onClick }) {
  return (
    <Button
      {...addressSearchOpenButtonProps}
      style={addressSearchOpenButtonStyle}
      onClick={onClick}
    />
  );
}

AddressSearchOpenButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddressSearchOpenButton;
