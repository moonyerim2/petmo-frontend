import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Link, Navigate } from "react-router-dom";
import { FormTextField, Button, PageHeader } from "../components";
import { Wrapper } from "../styled";
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
  validateErrorMessage,
} from "../constants";

function LoginPage() {
  const [loginInputs, setLoginInputs] = useRecoilState(loginInputsSelector);
  const [errorField, setErrorField] = useState({
    email: false,
    password: false,
  });
  const [validationMessage, setValidationMessage] = useRecoilState(
    loginValidationMessage
  );

  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authenticated);
  if (isAuthenticated) {
    return <Navigate to={"../"} />;
  }

  const onClickLoginButton = async (e) => {
    e.preventDefault();
    const { errorField, errorMessage } = validateLoginInput(loginInputs);
    setErrorField(errorField);
    setValidationMessage(errorMessage);

    if (!errorMessage) {
      const status = await callLoginApi(loginInputs);
      if (status === 400) {
        setErrorField({ email: true, password: true });
        setValidationMessage(validateErrorMessage.loginFailed);
      } else {
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
    <Wrapper>
      <form>
        <PageHeader pageTitle="로그인" />
        <FormTextField
          {...emailFieldProps}
          onBlur={onBlurTextField}
          isValid={!errorField.email}
        />
        <FormTextField
          {...passwordFieldProps}
          onBlur={onBlurTextField}
          isValid={!errorField.password}
        />
        <p>{validationMessage}</p>
        <Button {...loginButtonProps} onClick={onClickLoginButton} />
        <Link to="../join">회원가입</Link>
      </form>
    </Wrapper>
  );
}

export default LoginPage;
