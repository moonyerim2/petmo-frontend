import React from "react";
import PropTypes from "prop-types";
import { BigButton } from "../common";

function LoginButton({ loginFn, buttonProps, fontColor, bgColor }) {
  const onClickLoginButton = async (e) => {
    e.preventDefault();
    loginFn();
  };

  return (
    <BigButton
      buttonProps={buttonProps}
      fontColor={fontColor}
      bgColor={bgColor}
      onClick={onClickLoginButton}
    />
  );
}

LoginButton.propTypes = {
  loginFn: PropTypes.func,
  buttonProps: PropTypes.object,
  buttonStyle: PropTypes.object,
  fontColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default LoginButton;
