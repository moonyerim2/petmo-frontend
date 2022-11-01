import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../api";
import { TextField, Button } from "../components";
import {
  emailFieldProps,
  passwordFieldProps,
  loginButtonProps,
} from "../constants";

function LoginPage() {
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

  const pageInputState = {
    pageInputs: loginInputs,
    setPageInputs: setLoginInputs,
  };

  const onClickJoinButton = () => {
    auth.login(loginInputs);
  };

  return (
    <>
      <div>서비스에 대한 간략한 소개글</div>
      <TextField {...emailFieldProps} {...pageInputState} />
      <TextField {...passwordFieldProps} {...pageInputState} />
      <Button {...loginButtonProps} onClick={onClickJoinButton} />
      <Link to="../join">회원가입</Link>
    </>
  );
}

export default LoginPage;
