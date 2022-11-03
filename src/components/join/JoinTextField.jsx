import React from "react";
import PropTypes from "prop-types";
import { useSetRecoilState, useRecoilState } from "recoil";
import { TextField } from "../../components";
import {
  joinInputsSelector,
  joinValidationMessagesSelector,
} from "../../store";

function JoinTextField({ fieldProps }) {
  const setJoinInputs = useSetRecoilState(joinInputsSelector);
  const [validationMessages, setValidationMessages] = useRecoilState(
    joinValidationMessagesSelector
  );
  const { name } = fieldProps;

  const onChangeTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setJoinInputs(textFieldInput);
    setValidationMessages(textFieldInput);
  };

  return (
    <>
      <TextField {...fieldProps} onChange={onChangeTextField} />
      <p>{validationMessages[name]}</p>
    </>
  );
}

JoinTextField.propTypes = {
  fieldProps: PropTypes.object,
};

export default JoinTextField;
