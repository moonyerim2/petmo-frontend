import React, { useState, useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { JoinButton, JoinTextField } from "../../components";
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
  const joinInputs = useRecoilValue(joinInputsSelector);
  const validationMessages = useRecoilValue(joinValidationMessagesSelector);
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

  return (
    <form>
      <JoinTextField fieldProps={emailFieldProps} />
      <JoinTextField fieldProps={passwordFieldProps} />
      <JoinTextField fieldProps={nameFieldProps} />
      <JoinTextField fieldProps={nicknameFieldProps} />
      <JoinButton isDisabled={!isRightInput} />
    </form>
  );
}

export default JoinForm;
