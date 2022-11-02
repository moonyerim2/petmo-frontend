import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { TextField, Button } from "../components";
import { loginInputsSelector, loginValidationMessage } from "../store";
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

  const onClickJoinButton = () => {
    const errorMessage = validateLoginInput(loginInputs);
    setValidationMessage(errorMessage);
    if (!errorMessage) {
      callLoginApi(loginInputs);
    }
  };

  return (
    <>
      <div>서비스에 대한 간략한 소개글</div>
      <TextField {...emailFieldProps} setPageInputs={setLoginInputs} />
      <TextField {...passwordFieldProps} setPageInputs={setLoginInputs} />
      <p>{validationMessage}</p>
      <Button {...loginButtonProps} onClick={onClickJoinButton} />
      <Link to="../join">회원가입</Link>
    </>
  );
}

export default LoginPage;
