import React from "react";
import CaptionWithSideLine from "../common/CaptionWithSideLine";
import LoginButton from "./LoginButton";
import { kakaoLoginButtonProps, naverLoginButtonProps } from "../../constants";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 56px 0;
`;

const ButtonWrapper = styled.div`
  padding-top: 24px;

  button:first-child {
    margin-bottom: 8px;
  }
`;

function SocialLogin() {
  return (
    <Wrapper>
      <CaptionWithSideLine>간편 로그인</CaptionWithSideLine>
      <ButtonWrapper>
        <LoginButton
          buttonProps={kakaoLoginButtonProps}
          buttonStyle={{ fontColor: "black", bgColor: "kakao" }}
        />
        <LoginButton
          buttonProps={naverLoginButtonProps}
          buttonStyle={{ fontColor: "white", bgColor: "naver" }}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SocialLogin;
