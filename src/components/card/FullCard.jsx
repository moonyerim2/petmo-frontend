import React from "react";
import PropTypes from "prop-types";
import { LargeCard } from "petmo-design-system";
import { CardFooter } from ".";

function FullCard({ boardId, contentText, postData, postFooterData }) {
  return (
    <>
      <div style={{ padding: "20px 20px" }}>
        <LargeCard imageType="slider" {...postData}>
          {contentText}
        </LargeCard>
      </div>
      <CardFooter boardId={boardId} {...postFooterData} />
    </>
  );
}

FullCard.propTypes = {
  boardId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  contentText: PropTypes.string,
  postData: PropTypes.object,
  postFooterData: PropTypes.object,
};

export default FullCard;
