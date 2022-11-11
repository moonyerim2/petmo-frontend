import React from "react";
import { registerButtonProps, noRegisterButtonProps } from "../../constants";
import styled, { css } from "styled-components";
import { BigButton } from "../common";

const mainText = "반려동물\n정보를 등록해보세요!";
const subText = "'프로필'에서 언제든 변경할 수 있어요.";

const Wrapper = styled.div`
  margin-top: 24px;
  text-align: center;
  white-space: pre-wrap;

  button: last-child {
    margin-top: 8px;
  }
`;

const MainText = styled.p`
  ${({ theme: { fontSizes, lineHeights } }) => css`
    ${{
      paddingTop: "20px",
      fontSize: fontSizes.subtitle2,
      lineHeight: lineHeights[140],
      fontWeight: 500,
    }}
  `}
`;

const SubText = styled.p`
  ${({ theme: { colors, fontSizes, lineHeights } }) => css`
    ${{
      padding: "8px 0 24px",
      color: colors.fontLight2,
      fontSize: fontSizes.body2,
      lineHeight: lineHeights[150],
    }}
  `}
`;

function PetRegisterModalContent() {
  return (
    <Wrapper>
      <img src={`${process.env.PUBLIC_URL}/img/dog.svg`} alt="강아지" />
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
      <BigButton buttonProps={registerButtonProps} />
      <BigButton
        buttonProps={noRegisterButtonProps}
        bgColor={"white"}
        fontColor={"main"}
      />
    </Wrapper>
  );
}

export default PetRegisterModalContent;
