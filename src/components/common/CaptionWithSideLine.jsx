import React from "react";
import styled, { css } from "styled-components";

const Caption = styled.span`
  &:before,
  &:after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.gray700};
  }

  &: after {
    margin-left: 17px;
  }

  &: before {
    margin-right: 17px;
  }

  ${({ theme: { layout, fontSizes, colors, lineHeights } }) =>
    css`
      ${{
        ...layout.flexCenter,
        margin: "0 17px",
        fontSize: fontSizes.body2,
        color: colors.gray700,
        lineHeight: lineHeights[150],
      }}
    `};
`;

function CaptionWithSideLine() {
  return <Caption>간편 로그인</Caption>;
}

export default CaptionWithSideLine;
