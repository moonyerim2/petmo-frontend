import React, { useState } from "react";
import { callJoinApi } from "../api";
import { TextField, Button } from "../components";
import {
  emailFieldProps,
  passwordFieldProps,
  nameFieldProps,
  nicknameFieldProps,
  joinButtonProps,
} from "../constants";

function JoinPage() {
  const [joinInputs, setJoinInputs] = useState({ email: "", password: "" });

  const pageInputState = {
    pageInputs: joinInputs,
    setPageInputs: setJoinInputs,
  };

  const onClickJoinButton = () => {
    callJoinApi(joinInputs);
  };

  return (
    <>
      <TextField {...emailFieldProps} {...pageInputState} />
      <TextField {...passwordFieldProps} {...pageInputState} />
      <TextField {...nameFieldProps} {...pageInputState} />
      <TextField {...nicknameFieldProps} {...pageInputState} />
      <Button {...joinButtonProps} onClick={onClickJoinButton} />
    </>
  );
}

export default JoinPage;
