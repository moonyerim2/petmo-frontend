import React from "react";
import PropTypes from "prop-types";

function Button({ type, name, text, isDisabled, onClick }) {
  return (
    <button type={type} name={name} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
