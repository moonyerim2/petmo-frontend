import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { setStyledComponent } from "../../../styled";

const StyledButton = styled.button`
  ${({ theme, style }) => {
    return setStyledComponent({ theme, style });
  }}
`;

const Text = styled.span`
  ${({ imgLocation }) =>
    imgLocation === "left" ? "margin-left" : "margin-right"}:4px;
  font-weight: 700;
`;

function Button({
  type,
  name,
  text,
  img,
  imgLocation,
  isDisabled,
  onClick,
  style,
}) {
  return (
    <StyledButton
      type={type}
      name={name}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
    >
      {img && imgLocation === "left" && (
        <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} />
      )}
      <Text imgLocation={imgLocation}>{text}</Text>
      {img && imgLocation === "right" && (
        <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} />
      )}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.object,
  imgLocation: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.func,
};

export default Button;
