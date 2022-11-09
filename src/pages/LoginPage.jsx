import React from "react";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import { PageHeader, LoginForm, GoToJoinLink } from "../components";
import { Wrapper } from "../styled";
import { authenticated } from "../store";

function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authenticated);
  if (isAuthenticated) {
    return <Navigate to={"../"} />;
  }

  return (
    <Wrapper>
      <PageHeader pageTitle="로그인" />
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
      <GoToJoinLink />
    </Wrapper>
  );
}

export default LoginPage;
