import React from "react";
import { useRecoilState } from "recoil";
import { TextField, Button } from "../components";
import { joinInputsSelector, joinValidationMessagesSelector } from "../store";
import { callJoinApi } from "../api";
import {
  emailFieldProps,
  passwordFieldProps,
  nameFieldProps,
  nicknameFieldProps,
  joinButtonProps,
} from "../constants";

function JoinPage() {
  const [joinInputs, setjoinInputs] = useRecoilState(joinInputsSelector);
  const [validationMessages, setValidationMessages] = useRecoilState(
    joinValidationMessagesSelector
  );

  const onClickJoinButton = () => {
    const isRightInput = !Object.values(validationMessages).join("");
    if (isRightInput) {
      callJoinApi(joinInputs);
    }
  };

  const onChangeTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setjoinInputs(textFieldInput);
    setValidationMessages(textFieldInput);
  };

  return (
    <>
      <TextField {...emailFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.email}</p>
      <TextField {...passwordFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.password}</p>
      <TextField {...nameFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.name}</p>
      <TextField {...nicknameFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.nickname}</p>
      <Button {...joinButtonProps} onClick={onClickJoinButton} />
    </>
  );
}

export default JoinPage;
