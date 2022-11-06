import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { setStyledComponent } from "../../../styled";

const StyledButton = styled.button`
  ${({ theme, style }) => {
    return setStyledComponent({ theme, style });
  }}
`;

function Button({ type, name, text, img, isDisabled, onClick, style }) {
  return (
    <StyledButton
      type={type}
      name={name}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
    >
      {text}
      {img && <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.object,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.func,
};

export default Button;
