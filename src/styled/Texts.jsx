import styled, { css } from "styled-components";

export const BodyText1 = styled.p`
  ${({ theme: { fontSizes, colors, lineHeights }, color, lineHeight }) => css`
    ${{
      fontSize: fontSizes.body1,
      color: color ? colors.black : colors[color],
      lineHeight: lineHeight ? lineHeights[150] : lineHeights[lineHeight],
    }}
  `}
`;

export const BodyText2 = styled.p`
  ${({ theme: { fontSizes, colors, lineHeights }, color, lineHeight }) => css`
    ${{
      fontSize: fontSizes.body2,
      color: color ? colors[color] : colors.black,
      lineHeight: lineHeight ? lineHeights[lineHeight] : lineHeights[150],
    }}
  `}
`;

export const SubText = styled.p`
  ${({ theme: { colors, fontSizes, lineHeights } }) => css`
    ${{
      padding: "8px 0 24px",
      color: colors.fontLight2,
      fontSize: fontSizes.body2,
      textAlign: "center",
      lineHeight: lineHeights[150],
    }}
  `}
`;
