import React from "react";
import styled, { css } from "styled-components";
import { PageHeader, PetList, BottomButton } from "../components";
import { PageWrapper } from "../styled";
import { SubText } from "../styled";
import { tags, registerPetButtonProps } from "../constants";

const MainText = styled.p`
  ${({ theme: { fontSizes, lineHeights } }) => css`
    ${{
      paddingTop: "24px",
      fontSize: fontSizes.h5,
      lineHeight: lineHeights[140],
      textAlign: "center",
      whiteSpace: "pre-wrap",
      fontWeight: 500,
    }}
  `}

  .main-text1 {
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

const mainText1 = "반려동물";
const mainText2 = "을\n 등록해주세요.";
const subText = "최대 3마리까지 등록가능해요.";

function MyPetPage() {
  return (
    <>
      <PageWrapper>
        <PageHeader />
        <MainText>
          <span className="main-text1">{mainText1}</span>
          {mainText2}
        </MainText>
        <SubText>{subText}</SubText>
        <PetList petList={tags.pet} />
        <BottomButton buttonProps={registerPetButtonProps} isDisabled={true} />
      </PageWrapper>
    </>
  );
}

export default MyPetPage;
