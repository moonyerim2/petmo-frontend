import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { useSetRecoilState } from "recoil";
import { postTextAtom } from "../../store";

const placeholder =
  "공유하고 싶은 이야기를 적어보세요.\n링크나 사진을 업로드할 수도 있어요.";

const TextArea = styled.textarea`
  ${({ theme: { colors, fontSizes, lineHeights } }) =>
    css`
      ${{
        width: "100%",
        padding: "20px",
        fontSize: fontSizes.body1,
        lineHeight: lineHeights[140],
        borderTop: `8px solid ${colors.lineLight}`,
        resize: "none",
      }}

      &::placeholder {
        font-size: ${fontSizes.body1};
      }
    `}
`;

function PostTextarea() {
  const textarea = useRef(null);
  const setPostText = useSetRecoilState(postTextAtom);

  const onChange = ({ target }) => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    setPostText(target.value);
  };

  return (
    <TextArea
      ref={textarea}
      name="content"
      placeholder={placeholder}
      maxLength="150"
      onChange={onChange}
    />
  );
}

export default PostTextarea;
