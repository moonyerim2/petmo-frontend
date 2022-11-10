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

const inputStyle =
  (isValid) =>
  ({ colors, fontSizes, lineHeights, size }, isFocus) => {
    const borderColor = isFocus
      ? colors.main
      : !isValid
      ? colors.error
      : colors.lineMedium;

    return {
      ...size.size1,
      display: "flex",
      alignItems: "center",
      padding: "16px 0 16px 12px",
      height: "46px",
      fontSize: fontSizes.body2,
      fontWeight: 400,
      lineHeight: lineHeights[150],
      outline: "none",
      borderBottom: `1px solid ${borderColor}`,
    };
  };

function FormTextField(props) {
  return (
    <TextField
      {...props}
      labelStyle={labelStyle}
      inputStyle={inputStyle(props.isValid)}
      onChange={props.onChange}
    />
  );
}

FormTextField.propTypes = {
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FormTextField;
