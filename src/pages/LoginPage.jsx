import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { TextField, Button } from "../components";
import { loginInputsSelector } from "../store";
import { callLoginApi } from "../api";
import {
  emailFieldProps,
  passwordFieldProps,
  loginButtonProps,
} from "../constants";

function LoginPage() {
  const [loginInputs, setLoginInputs] = useRecoilState(loginInputsSelector);

  const onClickJoinButton = () => {
    callLoginApi(loginInputs);
  };

  return (
    <>
      <div>서비스에 대한 간략한 소개글</div>
      <TextField {...emailFieldProps} setPageInputs={setLoginInputs} />
      <TextField {...passwordFieldProps} setPageInputs={setLoginInputs} />
      <Button {...loginButtonProps} onClick={onClickJoinButton} />
      <Link to="../join">회원가입</Link>
    </>
  );
}

export default LoginPage;
