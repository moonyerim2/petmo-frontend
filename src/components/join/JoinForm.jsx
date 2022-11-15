import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { JoinButton, JoinTextField, Snackbar } from "../../components";
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

const authType = "join";

function JoinForm() {
  const joinInputs = useRecoilValue(joinInputsSelector);
  const validationMessages = useRecoilValue(joinValidationMessagesSelector);
  const [isRightInput, setIsRightInput] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const snackbarMessage = useRef("");

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

  const failToJoin = (message) => {
    snackbarMessage.current = message;
    setIsOpenSnackbar(true);
  };

  return (
    <form>
      <FormField>
        <JoinTextField
          fieldProps={nicknameFieldProps}
          isValid={isValid("nickname")}
        />
        <JoinTextField
          fieldProps={emailFieldProps(authType)}
          isValid={isValid("email")}
        />
        <JoinTextField
          fieldProps={passwordFieldProps(authType)}
          isValid={isValid("password")}
        />
        <JoinTextField
          fieldProps={passwordCheckFieldProps}
          isValid={isValid("passwordCheck")}
        />
      </FormField>
      <Snackbar
        open={isOpenSnackbar}
        setOpen={setIsOpenSnackbar}
        snackbarMessage={snackbarMessage.current}
        type={"error"}
      />
      <JoinButton isDisabled={!isRightInput} failToJoin={failToJoin} />
    </form>
  );
}

export default JoinForm;
