import React from "react";
import styled, { css } from "styled-components";

const notFoundTownMessageTop =
  "검색 결과가 없어요. \n동네 이름을 다시 확인해주세요!";

const notFoundTownMessageBottom = "동네 이름 다시 검색하기";

const Wrapper = styled.div`
  ${({ theme: { fontSizes } }) =>
    css`
      ${{
        paddingTop: "50px",
        textAlign: "center",
        fontSize: fontSizes.body1,
        whiteSpace: "pre-wrap",
      }}
    `}
`;

const MessageBottom = styled.p`
  ${({ theme: { colors } }) =>
    css`
      ${{
        marginTop: "10px",
        color: colors.main,
        fontWeight: 700,
      }}
    `}
`;

function NotFoundTown() {
  return (
    <Wrapper>
      <p>{notFoundTownMessageTop}</p>
      <MessageBottom>{notFoundTownMessageBottom}</MessageBottom>
    </Wrapper>
  );
}

export default NotFoundTown;
