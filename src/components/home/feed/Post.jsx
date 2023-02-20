import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LargeCard } from "petmo-design-system";
import { CardFooter } from "../card";

const CardContent = styled(Link)`
  display: block;
  padding: 0 20px;
`;

const CardWrapper = styled.li`
  &:not(:first-of-type) {
    padding-top: 20px;
  }
`;

function post({ boardId, contentText, postData }) {
  return (
    <CardWrapper>
      <CardContent key={boardId} to={`post/:${boardId}`}>
        <LargeCard {...postData}>{contentText}</LargeCard>
      </CardContent>
      <CardFooter />
    </CardWrapper>
  );
}

post.propTypes = {
  boardId: PropTypes.string | PropTypes.number,
  contentText: PropTypes.string,
  postData: PropTypes.object,
};

export default post;
