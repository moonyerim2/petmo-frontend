import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "../components";
import { joinInputsSelector, joinValidationMessagesSelector } from "../store";
import { callJoinApi } from "../api";
import { hasNotEmptyStingValue, hasOnlyEmptyStingValue } from "../util";
import {
  emailFieldProps,
  passwordFieldProps,
  nameFieldProps,
  nicknameFieldProps,
  joinButtonProps as defaultJoinButtonProps,
} from "../constants";

function JoinPage() {
  const [joinInputs, setjoinInputs] = useRecoilState(joinInputsSelector);
  const [validationMessages, setValidationMessages] = useRecoilState(
    joinValidationMessagesSelector
  );
  const [isRightInput, setIsRightInput] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isRightInput =
      hasOnlyEmptyStingValue(validationMessages) &&
      hasNotEmptyStingValue(joinInputs);

    setIsRightInput(isRightInput);
  }, [validationMessages, joinInputs]);

  useEffect(() => {
    if (isCompleted) {
      setTimeout(() => {
        navigate("../login");
      }, 1000);
    }
  }, [isCompleted, navigate]);

  if (isCompleted) {
    return <div>회원가입이 완료되었습니다.</div>;
  }

  const joinButtonProps = () => {
    if (isRightInput) {
      return {
        ...defaultJoinButtonProps,
        isDisabled: false,
      };
    }

    return defaultJoinButtonProps;
  };

  const onClickJoinButton = async (e) => {
    e.preventDefault();
    const status = await callJoinApi(joinInputs);
    if (status === 201) {
      setIsCompleted(true);
    }
  };

  const onChangeTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setjoinInputs(textFieldInput);
    setValidationMessages(textFieldInput);
  };

  return (
    <form>
      <TextField {...emailFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.email}</p>
      <TextField {...passwordFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.password}</p>
      <TextField {...nameFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.name}</p>
      <TextField {...nicknameFieldProps} onChange={onChangeTextField} />
      <p>{validationMessages.nickname}</p>
      <Button {...joinButtonProps()} onClick={onClickJoinButton} />
    </form>
  );
}

export default JoinPage;
