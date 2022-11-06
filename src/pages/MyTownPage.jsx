import React from "react";
import { PageHeader } from "../components";
import { SubTitle, Wrapper } from "../styled";
import SetUpTownButton from "../components/mytown/SetUpTownButton";
import Description from "../components/mytown/Description";

function MyTownPage() {
  return (
    <Wrapper>
      <PageHeader pageTitle="내 동네 설정하기" />
      <SubTitle>동네 선택</SubTitle>
      <Description />
      <SetUpTownButton />
    </Wrapper>
  );
}

export default MyTownPage;
