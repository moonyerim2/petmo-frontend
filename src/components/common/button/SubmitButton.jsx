import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function SubmitButton({ callApi, payload, buttonProps }) {
  const onClick = () => {
    callApi(payload);
  };

  return <Button {...buttonProps} onClick={onClick} />;
}

SubmitButton.propTypes = {
  callApi: PropTypes.func,
  payload: PropTypes.object,
  buttonProps: PropTypes.object,
};

export default SubmitButton;
