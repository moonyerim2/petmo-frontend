import React from "react";
import PropTypes from "prop-types";
import { Button, bigButtonStyle } from "../common";

function LoginButton({ loginFn, buttonProps, buttonStyle }) {
  const fontColor = buttonStyle ? buttonStyle.fontColor : null;
  const bgColor = buttonStyle ? buttonStyle.bgColor : null;

  const onClickLoginButton = async (e) => {
    e.preventDefault();
    loginFn();
  };

  return (
    <Button
      {...buttonProps}
      onClick={onClickLoginButton}
      style={bigButtonStyle(fontColor, bgColor)}
    />
  );
}

LoginButton.propTypes = {
  loginFn: PropTypes.func,
  buttonProps: PropTypes.object,
  buttonStyle: PropTypes.object,
};

export default LoginButton;
