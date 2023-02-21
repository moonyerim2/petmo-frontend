import React from "react";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  ${({ theme: { color, fontSize, fontWeight } }) => {
    return css`
      ${{
        height: "calc(100vh - 160px - 56px)",
        textAlign: "center",
        color: color.disable,
        fontSize: fontSize.h5,
        fontWeight: fontWeight.bold,
        lineHeight: "calc(100vh - 160px - 56px)",
      }}
    `;
  }}
`;

function NoPost() {
  return <StyledDiv>{`데이터가 없습니다. :(`}</StyledDiv>;
}

export default NoPost;
