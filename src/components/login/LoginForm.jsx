import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { FormTextField } from "../common";
import { emailFieldProps, passwordFieldProps } from "../../constants";
import { useLogin } from "../../hooks";

function LoginForm() {
  const { errorField, validationMessage, login, setLoginInputs } = useLogin();

  const onBlurTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setLoginInputs(textFieldInput);
  };

  return (
    <form>
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
      <LoginButton loginFn={login} />
      <Link to="../join">회원가입</Link>
    </form>
  );
}

export default LoginForm;
