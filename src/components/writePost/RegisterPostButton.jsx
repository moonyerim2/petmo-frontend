import React from "react";
import { PropTypes } from "prop-types";
import { Button, buttonStyle } from "../common";
import { registerPostButtonProps } from "../../constants";

const registerPostButtonStyle = (isDisabled) =>
  buttonStyle({
    isDisabled: isDisabled,
    size: "size3",
    fontSize: "body2",
    fontWeight: 700,
    lineHeight: 150,
    borderRadius: "medium",
  });

function RegisterPostButton({ isDisabled }) {
  return (
    <Button
      {...registerPostButtonProps}
      style={registerPostButtonStyle(isDisabled)}
    />
  );
}

RegisterPostButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default RegisterPostButton;
