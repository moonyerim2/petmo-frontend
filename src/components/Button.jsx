import React from "react";

function Button({ type, name, text, isDisabled, onClick }) {
  return (
    <button type={type} name={name} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
