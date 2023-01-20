import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Photo = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: black;
  margin-right: 8px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const UserName = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
`;

const UserInfo = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 140%;
  font-size: 11px;
  color: #767676;
`;

function UserInfoHeader({ author, village, time }) {
  return (
    <CardHeaderInfo>
      <Photo></Photo>
      <InfoBox>
        <UserName>{author}</UserName>
        <UserInfo>
          {village} · {time}
        </UserInfo>
      </InfoBox>
    </CardHeaderInfo>
  );
}

UserInfoHeader.propTypes = {
  author: PropTypes.node,
  village: PropTypes.node,
  time: PropTypes.node,
};

export default UserInfoHeader;
