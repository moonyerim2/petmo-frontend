import React from "react";
import styled from "styled-components";
import { PageHeader, Button } from "../components";
import { setUpTownButtonProps } from "../constants";

const mytownDescription = `지역은 1개 설정할 수 있어요.\n동네설정은 시/군/구 단위로 설정하지만 구 단위로\n동네소식을 볼 수 있어요.`;

function MyTownPage() {
  return (
    <>
      <PageHeader pageTitle="내 동네 설정하기" />
      <h2>동네 선택</h2>
      <Description>{mytownDescription}</Description>
      <Button {...setUpTownButtonProps} />
    </>
  );
}

const Description = styled.p`
  white-space: pre-wrap;
`;

export default MyTownPage;
