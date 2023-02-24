import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LargeCard } from "petmo-design-system";
import { CardFooter } from ".";

const CardContent = styled(Link)`
  display: block;
  padding: 0 20px 20px;
`;

const CardWrapper = styled.li`
  &:not(:first-of-type) {
    padding-top: 20px;
  }
`;

function SummaryCard({ boardId, contentText, postData, postFooterData }) {
  return (
    <CardWrapper>
      <CardContent key={boardId} to={`post/:${boardId}`}>
        <LargeCard isSummary={true} imageType="image" {...postData}>
          {contentText}
        </LargeCard>
      </CardContent>
      <CardFooter boardId={boardId} {...postFooterData} />
    </CardWrapper>
  );
}

SummaryCard.propTypes = {
  boardId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  contentText: PropTypes.string,
  postData: PropTypes.object,
  postFooterData: PropTypes.object,
};

export default SummaryCard;
