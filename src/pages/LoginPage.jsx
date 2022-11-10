import React from "react";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import {
  PageHeader,
  LoginForm,
  GoToJoinLink,
  SocialLogin,
} from "../components";
import { PageWrapper } from "../styled";
import { authenticated } from "../store";

function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authenticated);
  if (isAuthenticated) {
    return <Navigate to={"../"} />;
  }

  return (
    <PageWrapper>
      <PageHeader pageTitle="로그인" />
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
      <SocialLogin />
      <GoToJoinLink />
    </PageWrapper>
  );
}

export default LoginPage;
