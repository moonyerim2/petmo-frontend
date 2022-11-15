import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { JoinButton, JoinFormField, Snackbar } from "../../components";
import {
  joinInputs as joinInputsAtom,
  joinInputsSelector,
  joinValidationMessages,
  joinValidationMessagesSelector,
} from "../../store";
import { hasNotEmptyStingValue, hasOnlyEmptyStingValue } from "../../util";

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

  const failToJoin = (message) => {
    snackbarMessage.current = message;
    setIsOpenSnackbar(true);
  };

  return (
    <form>
      <JoinFormField validationMessages={validationMessages} />
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
