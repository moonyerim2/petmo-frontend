import React from "react";
import styled from "styled-components";

const placeholder =
  "공유하고 싶은 이야기를 적어보세요.\n링크나 사진을 업로드할 수도 있어요.";

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
`;

function PostTextarea() {
  return <TextArea name="register-post" placeholder={placeholder} />;
}

export default PostTextarea;
