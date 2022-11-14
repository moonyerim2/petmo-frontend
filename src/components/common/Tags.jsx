import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
function Tags({ categoryTag, animalTag }) {
  return (
    <CardHeaderTags>
      <CategoryTag>{categoryTag}</CategoryTag>
      {animalTag.map((it) => (
        <AnimalTag key={it.id}>{it.tagName}</AnimalTag>
      ))}
    </CardHeaderTags>
  );
}

Tags.propTypes = {
  categoryTag: PropTypes.node,
  animalTag: PropTypes.array,
};

export default Tags;
