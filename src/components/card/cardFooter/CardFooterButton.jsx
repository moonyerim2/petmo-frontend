import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  ${({ theme: { color, fontSize, layout } }) => {
    return css`
      ${{
        ...layout.flexCenter,
        marginRight: fontSize.caption,
        backgroundColor: color.white,
        fontSize: fontSize.body2,
        color: color.gray700,
        border: "none",
      }}
    `;
  }}
`;

const Icon = styled.img`
  margin-right: 2px;
`;

function CardFooterButton({ dataCount, iconSrc, iconAlt, ...rest }) {
  return (
    <StyledButton {...rest}>
      <Icon src={iconSrc} alt={iconAlt} />
      <span>{dataCount}</span>
    </StyledButton>
  );
}

CardFooterButton.propTypes = {
  dataCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
};

export default CardFooterButton;
