import React from "react";
import PropTypes from "prop-types";

function Button({ type, name, text, img, isDisabled, onClick }) {
  return (
    <button type={type} name={name} disabled={isDisabled} onClick={onClick}>
      {img && <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} />}
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.object,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
