import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Message = styled.p`
  ${({ theme: { colors, fontSizes }, style }) =>
    css`
      ${{
        fontSize: fontSizes.caption,
        color: colors.error,
        whiteSpace: "pre-wrap",
        ...style,
      }}
    `}
`;

function FormErrorMessage({ message, style }) {
  return <Message style={style}>{message}</Message>;
}

FormErrorMessage.propTypes = {
  message: PropTypes.string,
  style: PropTypes.object,
};

export default FormErrorMessage;
