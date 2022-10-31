import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, LoginButton } from "../components";

const emailFieldProps = {
  id: "email",
  label: "이메일",
  text: "",
  type: "email",
  name: "email",
  placeholder: "",
};

const passwordFieldProps = {
  id: "password",
  label: "비밀번호",
  text: "",
  type: "password",
  name: "password",
  placeholder: "",
};

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
      <LoginButton />
      <Link to="../join">회원가입</Link>
    </>
  );
}

export default LoginPage;
