import React from "react";
import { useRecoilState } from "recoil";
import { Link, Navigate } from "react-router-dom";
import { TextField, Button } from "../components";
import {
  loginInputsSelector,
  loginValidationMessage,
  authenticated,
} from "../store";
import { callLoginApi } from "../api";
import { validateLoginInput } from "../util";
import {
  emailFieldProps,
  passwordFieldProps,
  loginButtonProps,
} from "../constants";

function LoginPage() {
  const [loginInputs, setLoginInputs] = useRecoilState(loginInputsSelector);
  const [validationMessage, setValidationMessage] = useRecoilState(
    loginValidationMessage
  );

  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authenticated);
  if (isAuthenticated) {
    return <Navigate to={"../"} />;
  }

  const onClickLoginButton = async (e) => {
    e.preventDefault();
    const errorMessage = validateLoginInput(loginInputs);
    setValidationMessage(errorMessage);
    if (!errorMessage) {
      const status = await callLoginApi(loginInputs);
      if (status === 200) {
        setIsAuthenticated(true);
      }
    }
  };

  const onBlurTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setLoginInputs(textFieldInput);
  };

  return (
    <form>
      <div>서비스에 대한 간략한 소개글</div>
      <TextField {...emailFieldProps} onBlur={onBlurTextField} />
      <TextField {...passwordFieldProps} onBlur={onBlurTextField} />
      <p>{validationMessage}</p>
      <Button {...loginButtonProps} onClick={onClickLoginButton} />
      <Link to="../join">회원가입</Link>
    </form>
  );
}

export default LoginPage;
