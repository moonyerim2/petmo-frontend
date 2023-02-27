import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PageWrapper } from "../../styled";
import CommentInputInfomation from "./CommentInputInfomation";
import CommentSubmitButton from "./CommentSubmitButton";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.white};
`;

const InputBox = styled(PageWrapper)`
  ${({ theme: { color, fontSize, layout } }) => {
    return css`
      ${{
        ...layout.flex_aCenter_jBetween,
        color: color.gray600,
        fontSize: fontSize.body1,
        boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.06)",
      }}
    `;
  }}
`;

const Input = styled.input`
  padding: 12px 2px;
  height: 56px;
  width: calc(100% - 50px);
`;

function CommentInput() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleInput = ({ target: { value } }) => {
    setInput(value);
  };

  const handleFocus = () => {
    setShowInfo(true);
  };

  const handleBlur = () => {
    setShowInfo(false);
  };

  const handleKeyUp = ({ target: { value } }) => {
    value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <Wrapper>
      {showInfo ? <CommentInputInfomation /> : null}
      <InputBox>
        <Input
          value={input}
          type="text"
          placeholder="답글을 입력하세요."
          onChange={handleInput}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <CommentSubmitButton isDisabled={!isValid} />
      </InputBox>
    </Wrapper>
  );
}

export default CommentInput;
