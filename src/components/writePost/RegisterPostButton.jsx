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

function RegisterPostButton({
  isDisabled,
  onClickWhenAble,
  onClickWhenDisable,
}) {
  const newButtonProps = { ...registerPostButtonProps, ...isDisabled };

  const onClick = (e) => {
    e.preventDefault();
    if (!isDisabled && onClickWhenAble) {
      onClickWhenAble(e);
    } else if (isDisabled && onClickWhenDisable) {
      onClickWhenDisable(e);
    }
  };

  return (
    <Button
      {...newButtonProps}
      onClick={onClick}
      style={registerPostButtonStyle(isDisabled)}
    />
  );
}

RegisterPostButton.propTypes = {
  isDisabled: PropTypes.bool,
  onClickWhenAble: PropTypes.func,
  onClickWhenDisable: PropTypes.func,
};

export default RegisterPostButton;
