import React from "react";
import PropTypes from "prop-types";
import { Button, bigButtonStyle } from "../common";
import { loginButtonProps } from "../../constants";

function LoginButton({ loginFn }) {
  const onClickLoginButton = async (e) => {
    e.preventDefault();
    loginFn();
  };

  return (
    <Button
      {...loginButtonProps}
      onClick={onClickLoginButton}
      style={bigButtonStyle("white", "main")}
    />
  );
}

LoginButton.propTypes = {
  loginFn: PropTypes.func,
};

export default LoginButton;
