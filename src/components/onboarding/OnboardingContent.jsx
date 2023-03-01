import React from "react";
import styled from "styled-components";
import LogoType from "../../css/icon/LogoType.svg";

const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h2};
  line-height: 140%;
`;

const DescriptionStrong = styled.strong`
  font-weight: bold;
`;

const Logo = styled.img`
  margin: 24px auto 0;
`;

function OnboardingContent() {
  return (
    <>
      <Description>
        우리 동네
        <br />
        <DescriptionStrong>모든 동물</DescriptionStrong>
        <br /> 이야기
      </Description>
      <Logo src={LogoType} alt="로고" />
    </>
  );
}

export default OnboardingContent;
