import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { FormTextField, FormErrorMessage } from "../../components";
import {
  joinInputsSelector,
  joinValidationMessagesSelector,
} from "../../store";

function JoinTextField({ fieldProps, isValid }) {
  const [joinInputs, setJoinInputs] = useRecoilState(joinInputsSelector);
  const [validationMessages, setValidationMessages] = useRecoilState(
    joinValidationMessagesSelector
  );
  const { name } = fieldProps;

  const onChangeTextField = ({ target }) => {
    const { value, name } = target;
    const password = joinInputs.password;
    const textFieldInput = { [name]: value };

    setJoinInputs(textFieldInput);
    setValidationMessages({ textFieldInput, password });
  };

  return (
    <>
      <FormTextField
        {...fieldProps}
        onChange={onChangeTextField}
        isValid={isValid}
      />
      <FormErrorMessage
        message={validationMessages[name]}
        style={{ paddingTop: "6px" }}
      />
    </>
  );
}

JoinTextField.propTypes = {
  fieldProps: PropTypes.object,
  isValid: PropTypes.bool,
};

export default JoinTextField;
