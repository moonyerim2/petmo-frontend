import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PageWrapper } from "../styled";
import { onboardingStartButtonProps } from "../constants";
import { OnboardingStartButton, OnboardingContent } from "../components";

const LandingPageWrapper = styled(PageWrapper)`
  height: 100vh;
  padding-top: 200px;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.main};
`;

function LandingPage() {
  const [loading, setLoading] = useState(false);
  const handleBtnClick = () => {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [loading]);

  return (
    <LandingPageWrapper>
      <OnboardingContent loading={loading} />
      <OnboardingStartButton
        loading={loading}
        onClick={handleBtnClick}
        buttonProps={onboardingStartButtonProps}
        fontColor="main"
        bgColor="white"
      />
    </LandingPageWrapper>
  );
}

export default LandingPage;
