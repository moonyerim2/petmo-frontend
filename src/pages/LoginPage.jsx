import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "../components";
import { emailFieldProps, passwordFieldProps } from "../constants";

function LoginPage() {
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

  const pageInputState = {
    pageInputs: loginInputs,
    setPageInputs: setLoginInputs,
  };

  return (
    <>
      <div>서비스에 대한 간략한 소개글</div>
      <TextField {...emailFieldProps} {...pageInputState} />
      <TextField {...passwordFieldProps} {...pageInputState} />
      <Button text="로그인"/>
      <Link to="../join">회원가입</Link>
    </>
  );
}

export default LoginPage;
