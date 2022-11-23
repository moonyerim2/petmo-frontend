import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Tags } from "../common";
import OnlyTextContent from "./OnlyTextContent";
import TextContent from "./TextContent";

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0px 20px;
  height: 106px;
  border-bottom: 1px solid #f0f0f6;
  display: flex;
  justfiy-content: center;
  align-items: center;
`;
const Textside = styled.div`
  height: 74px;
`;
const Imgside = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  margin-left: 15px;
`;

function BookmarkCard({ categoryTag, animalTag, content }) {
  if (content.image === null && content.text !== null) {
    return (
      <Wrapper>
        <Textside>
          <Tags categoryTag={categoryTag} animalTag={animalTag} />
          <OnlyTextContent text={content.text} />
        </Textside>
      </Wrapper>
    );
  }
  if (content.image !== null && content.text !== null) {
    return (
      <Wrapper>
        <Textside>
          <Tags categoryTag={categoryTag} animalTag={animalTag} />
          <TextContent text={content.text} />
        </Textside>
        <Imgside>
          <Img src={content.image[0].src} alt="img"></Img>
        </Imgside>
      </Wrapper>
    );
  }
}

export default BookmarkCard;

BookmarkCard.propTypes = {
  categoryTag: PropTypes.node,
  animalTag: PropTypes.array,
  content: PropTypes.object,
};
