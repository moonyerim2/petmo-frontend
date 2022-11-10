import React from "react";
import PropTypes from "prop-types";
import { useSetRecoilState, useRecoilState } from "recoil";
import { FormTextField } from "../../components";
import {
  joinInputsSelector,
  joinValidationMessagesSelector,
} from "../../store";

function JoinTextField({ fieldProps, isValid }) {
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
      <FormTextField
        {...fieldProps}
        onChange={onChangeTextField}
        isValid={isValid}
      />
      <p>{validationMessages[name]}</p>
    </>
  );
}

JoinTextField.propTypes = {
  fieldProps: PropTypes.object,
  isValid: PropTypes.bool,
};

export default JoinTextField;
