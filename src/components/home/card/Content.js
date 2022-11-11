import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin: 16px 20px;
`;
const TextArea = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
`;
const MoreButton = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #999999;
  padding: 3px;
`;
function Content({ content }) {
  const [limit] = useState(80);
  const handleShortText = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  return (
    <Wrapper>
      <Link to="/post/:postId">
        <TextArea>
          {handleShortText(content.text, limit).string}
          {handleShortText(content.text, limit).isShowMore && (
            <>
              <span>...</span>
              <MoreButton>더 보기</MoreButton>
            </>
          )}
        </TextArea>
      </Link>
    </Wrapper>
  );
}

Content.propTypes = {
  content: PropTypes.object,
};
export default Content;
