import React from "react";
import styled from "styled-components";
import CaptionWithSideLine from "../common/CaptionWithSideLine";
import LoginButton from "./LoginButton";

import { kakaoLoginButtonProps, naverLoginButtonProps } from "../../constants";
import { useSocialLogin } from "../../hooks";

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
  const { login } = useSocialLogin();

  return (
    <Wrapper>
      <CaptionWithSideLine>간편 로그인</CaptionWithSideLine>
      <ButtonWrapper>
        <LoginButton
          loginFn={login("kakao")}
          buttonProps={kakaoLoginButtonProps}
          buttonStyle={{ fontColor: "black", bgColor: "kakao" }}
        />
        <LoginButton
          loginFn={login("naver")}
          buttonProps={naverLoginButtonProps}
          buttonStyle={{ fontColor: "white", bgColor: "naver" }}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SocialLogin;
