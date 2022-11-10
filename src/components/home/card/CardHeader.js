import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardHeaderInfo = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 8px;
  padding-right: 20px;
  padding-left: 20px;
`;
const Photo = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: black;
  margin: 8px;
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
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 12px;
  color: rgba(118, 118, 118, 1);
`;
const CardHeaderTags = styled.div`
  margin: 8px 20px;
  height: 26px;
  display: flex;
  align-items: center;
`;

const CategoryTag = styled.span`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 26px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  background: #ffecf3;
  border-radius: 8px;
  color: #fa3c89;
  margin: 2px;
`;
const AnimalTag = styled.span`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 26px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  background: #eaf6ff;
  border-radius: 8px;
  color: #0d5bf1;
  margin: 2px;
`;

function CardHeader({ author, village, time }) {
  return (
    <Header>
      <CardHeaderInfo>
        <Photo></Photo>
        <InfoBox>
          <UserName>{author}</UserName>
          <UserInfo>
            {village} · {time}
          </UserInfo>
        </InfoBox>
      </CardHeaderInfo>
      <CardHeaderTags>
        <CategoryTag>축하해요</CategoryTag>
        <AnimalTag>강아지</AnimalTag>
      </CardHeaderTags>
    </Header>
  );
}
export default CardHeader;

CardHeader.propTypes = {
  author: PropTypes.node,
  village: PropTypes.node,
  time: PropTypes.node,
};
