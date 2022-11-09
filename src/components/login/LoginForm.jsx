import React from "react";
import styled, { css } from "styled-components";
import LoginButton from "./LoginButton";
import { FormTextField } from "../common";
import { FormField } from "../../styled";
import { useLogin } from "../../hooks";
import {
  emailFieldProps,
  localLoginButtonProps,
  passwordFieldProps,
} from "../../constants";

const ErrorMessage = styled.p`
  ${({ theme: { colors, fontSizes } }) =>
    css`
      ${{
        fontSize: fontSizes.caption,
        color: colors.error,
        padding: "6px 0 16px",
        whiteSpace: "pre-wrap",
      }}
    `}
`;

function LoginForm() {
  const { errorField, validationMessage, login, setLoginInputs } = useLogin();

  const onBlurTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setLoginInputs(textFieldInput);
  };

  return (
    <>
      <form>
        <FormField>
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
        </FormField>
        <ErrorMessage>{validationMessage}</ErrorMessage>
        <LoginButton
          loginFn={login}
          buttonProps={localLoginButtonProps}
          buttonStyle={{ fontColor: "white", bgColor: "main" }}
        />
      </form>
    </>
  );
}

export default LoginForm;
