import React, { useState, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { TextField, JoinButton } from "../../components";
import {
  joinInputs as joinInputsAtom,
  joinInputsSelector,
  joinValidationMessages,
  joinValidationMessagesSelector,
} from "../../store";
import {
  emailFieldProps,
  passwordFieldProps,
  nameFieldProps,
  nicknameFieldProps,
} from "../../constants";
import { hasNotEmptyStingValue, hasOnlyEmptyStingValue } from "../../util";

function JoinForm() {
  const [joinInputs, setJoinInputs] = useRecoilState(joinInputsSelector);
  const [validationMessages, setValidationMessages] = useRecoilState(
    joinValidationMessagesSelector
  );
  const [isRightInput, setIsRightInput] = useState(false);

  const resetJoinInputs = useResetRecoilState(joinInputsAtom);
  const resetValidationMessages = useResetRecoilState(joinValidationMessages);

  useEffect(() => {
    return () => {
      resetJoinInputs();
      resetValidationMessages();
    };
  }, []);

  useEffect(() => {
    const isRightInput =
      hasOnlyEmptyStingValue(validationMessages) &&
      hasNotEmptyStingValue(joinInputs);

    setIsRightInput(isRightInput);
  }, [validationMessages, joinInputs]);

  const onChangeTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setJoinInputs(textFieldInput);
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
      <JoinButton isDisabled={!isRightInput} />
    </form>
  );
}

export default JoinForm;
