import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { setStyledComponent } from "../../../styled";

const StyledButton = styled.button`
  ${({ theme, style }) => {
    return setStyledComponent({ theme, style });
  }}

  img {
    margin: ${({ text }) => (!text ? "0 auto" : null)};
  }
`;

const Text = styled.span`
  ${({ imgLocation, gap }) =>
    gap && imgLocation === "left"
      ? `margin-left: ${gap}px;`
      : `margin-right: ${gap}px;`}
`;

function Button({
  type,
  name,
  text,
  img,
  imgLocation,
  gap,
  isDisabled,
  onClick,
  style,
}) {
  return (
    <StyledButton
      text={text}
      type={type}
      name={name}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
    >
      {img && imgLocation === "left" && (
        <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} />
      )}
      {text && (
        <Text imgLocation={imgLocation} gap={gap}>
          {text}
        </Text>
      )}
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
  gap: PropTypes.number,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.func,
};

export default Button;
