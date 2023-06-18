import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  height: 215px;
  background-color: white;
`;
const UserInfoBox = styled.div`
  height: 128px;
  width: 100%;
  padding: 24px 20px;
  display: flex;
`;
const UserPicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: black;
`;
const UserInfo = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserName = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
`;
const UserVillage = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #767676;
`;
const UserTag = styled.span`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  width: 61px;
  height: 26px;
  left: 89px;
  top: 237px;
  background: #f1f1f5;
  border-radius: 8px;
  color: #111111;
  margin-right: 8px;
`;
const UserTagBox = styled.div`
  height: 55px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserTagTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #767676;
`;
const UserTags = styled.div`
  display: flex;
`;
function UserProfile({ username, regionDepth2, animals }) {
  return (
    <Wrapper>
      <UserInfoBox>
        <UserPicture></UserPicture>
        <UserInfo>
          <UserName>{username}</UserName>
          <UserVillage>{regionDepth2}</UserVillage>
        </UserInfo>
      </UserInfoBox>
      <UserTagBox>
        <UserTagTitle>반려동물</UserTagTitle>
        <UserTags>
          {animals &&
            animals.map((it, index) => <UserTag key={index}>{it}</UserTag>)}
        </UserTags>
      </UserTagBox>
    </Wrapper>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string,
  regionDepth2: PropTypes.string,
  animals: PropTypes.array,
};

export default UserProfile;
