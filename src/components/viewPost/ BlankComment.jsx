import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 32px 0 72px;
  text-align: center;
  line-height: 150%;
  font-size: 16px;
  color: ${({ theme: { color } }) => color.disable};
`;

function BlankComment() {
  return (
    <Wrapper>
      <p>
        아직 댓글이 없어요.
        <br />
        가장 먼저 댓글을 남겨보세요.
      </p>
    </Wrapper>
  );
}

export default BlankComment;
