import React from "react";
import styled from "styled-components";
import { PageHeader, Button } from "../components";
import { SubTitle } from "../styled";
import { setUpTownButtonProps } from "../constants";

const mytownDescription = "지역은 1개 설정할 수 있어요.";

const setUpTownButtonStyle = ({ colors, common, borderRadius }) => {
  return {
    ...common.flex_aCenter_jBetween,
    ...common.buttonSize,
    padding: "16px 16px 16px 12px",
    border: `1px solid ${colors.gray400}`,
    borderRadius: borderRadius.small,
    color: colors.gray600,
  };
};

function MyTownPage() {
  return (
    <>
      <PageHeader pageTitle="내 동네 설정하기" />
      <SubTitle>동네 선택</SubTitle>
      <Description>{mytownDescription}</Description>
      <Button {...setUpTownButtonProps} style={setUpTownButtonStyle} />
    </>
  );
}

const Description = styled.p`
  white-space: pre-wrap;
`;

export default MyTownPage;
