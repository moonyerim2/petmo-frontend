import React, { useState, useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { JoinButton, JoinTextField } from "../../components";
import { FormField } from "../../styled";
import {
  joinInputs as joinInputsAtom,
  joinInputsSelector,
  joinValidationMessages,
  joinValidationMessagesSelector,
} from "../../store";
import {
  emailFieldProps,
  passwordFieldProps,
  nicknameFieldProps,
  passwordCheckFieldProps,
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

  const isValid = (fieldName) => validationMessages[fieldName] === "";

  return (
    <form>
      <FormField>
        <JoinTextField
          fieldProps={nicknameFieldProps}
          isValid={isValid("nickname")}
        />
        <JoinTextField
          fieldProps={emailFieldProps}
          isValid={isValid("email")}
        />
        <JoinTextField
          fieldProps={passwordFieldProps}
          isValid={isValid("password")}
        />
        <JoinTextField
          fieldProps={passwordCheckFieldProps}
          isValid={isValid("passwordCheck")}
        />
      </FormField>
      <JoinButton isDisabled={!isRightInput} />
    </form>
  );
}

export default JoinForm;
