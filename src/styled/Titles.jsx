import styled, { css } from "styled-components";

export const HeaderTitle = styled.h1`
  ${({ theme: { fontSizes } }) => css`
    ${{
      margin: "0 auto",
      fontSize: fontSizes.subtitle2,
      fontWeight: "700",
    }}
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme: { fontSizes } }) => css`
    ${{
      padding: "24px 0 4px 0",
      fontSize: fontSizes.subtitle2,
      fontWeight: "500",
    }}
  `}
`;
