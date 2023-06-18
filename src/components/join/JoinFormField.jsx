import React from "react";
import PropTypes from "prop-types";
import { FormField } from "../../styled";
import { JoinTextField } from "../../components";
import {
  emailFieldProps,
  passwordFieldProps,
  usernameFieldProps,
  passwordCheckFieldProps,
} from "../../constants";

const authType = "join";

function JoinFormField({ validationMessages }) {
  const isValid = (fieldName) => validationMessages[fieldName] === "";

  return (
    <FormField>
      <JoinTextField
        fieldProps={usernameFieldProps}
        isValid={isValid("username")}
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
  );
}

JoinFormField.propTypes = {
  validationMessages: PropTypes.object,
};

export default JoinFormField;
