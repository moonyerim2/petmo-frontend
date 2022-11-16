import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { JoinButton, JoinFormField, Snackbar } from "../../components";
import {
  joinInputs as joinInputsAtom,
  joinInputsSelector,
  joinValidationMessages,
  joinValidationMessagesSelector,
} from "../../store";
import { hasNotEmptyStingValue, hasOnlyEmptyStingValue } from "../../util";

const StyledForm = styled.form`
  margin-bottom: 100px;
`;

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
    <StyledForm>
      <JoinFormField validationMessages={validationMessages} />
      <Snackbar
        open={isOpenSnackbar}
        setOpen={setIsOpenSnackbar}
        snackbarMessage={snackbarMessage.current}
        type={"error"}
      />
      <JoinButton isDisabled={!isRightInput} failToJoin={failToJoin} />
    </StyledForm>
  );
}

export default JoinForm;
