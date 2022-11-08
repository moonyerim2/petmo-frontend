import React from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";

const labelStyle = ({ fontSizes, lineHeights }) => {
  return {
    fontSize: fontSizes.body2,
    fontWeight: 500,
    lineHeight: lineHeights[150],
    paddingBottom: "4px",
  };
};

const inputStyle = ({ colors, fontSizes, lineHeights, size }, isFocus) => {
  return {
    ...size.bigButtonSize,
    display: "flex",
    alignItems: "center",
    padding: "16px 0 16px 12px",
    height: "46px",
    fontSize: fontSizes.body2,
    fontWeight: 400,
    lineHeight: lineHeights[150],
    borderBottom: `1px solid ${isFocus ? colors.main : colors.lineMedium}`,
    outline: "none",
  };
};

function FormTextField(props) {
  return (
    <TextField
      {...props}
      labelStyle={labelStyle}
      inputStyle={inputStyle}
      isValid={props.isValid}
    />
  );
}

FormTextField.propTypes = {
  isValid: PropTypes.bool,
};

export default FormTextField;
