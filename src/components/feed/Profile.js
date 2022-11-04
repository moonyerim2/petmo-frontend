import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;
const Photo = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: black;
  margin: 7px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.span`
  font-family: Pretendard;
  font-weight: Medium;
  font-size: 12px;
  padding: 2px;
`;
const UserInfo = styled.span`
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 12px;
  color: rgba(118, 118, 118, 1);
  padding: 2px;
`;

function Profile() {
  return (
    <Wrapper>
      <Photo></Photo>
      <InfoBox>
        <UserName>userName</UserName>
        <UserInfo>village</UserInfo>
      </InfoBox>
    </Wrapper>
  );
}
export default Profile;
