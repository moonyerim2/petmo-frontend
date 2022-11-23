import React, { useState } from "react";
import styled from "styled-components";
import SubmitBtn from "../../css/icon/SubmitBtn.svg";
import ColoredSubmitBtn from "../../css/icon/ColoredSubmitBtn.svg";

const Wrapper = styled.div`
  height: 64px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #999999;
  }
`;
const InputBox = styled.div`
  width: 320px;
  height: 46px;
  left: 20px;
  top: 841px;

  background: #ffffff;
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  display: flex;
  align-items: center;

  input {
    width: 260px;
    padding: 12px;
    caret-color: #fa3c89;
  }
  button {
    display: flex;
    justify-content: center;
  }
`;
const CommentInfo = styled.div`
  background: #f1f1f5;
  height: 36px;
  display: flex;
  align-items: center;
`;
const CommentInfoText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #767676;
  margin-left: 20px;
  span {
    color: #fa3c89;
  }
`;
function PostCommentBox() {
  const [input, setInput] = useState();
  const [isValid, setIsValid] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setShowInfo(true);
  };

  return (
    <>
      {showInfo ? (
        <CommentInfo>
          <CommentInfoText>
            <span>챌이2</span>님에게 답글 남기는 중
          </CommentInfoText>
        </CommentInfo>
      ) : null}

      <Wrapper>
        <InputBox>
          <input
            value={input}
            type="text"
            placeholder="답글을 입력하세요."
            onChange={handleInput}
            onKeyUp={(e) => {
              e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
            }}
            onClick={handleClick}
          />
          <button disabled={isValid ? false : true}>
            <img src={isValid ? ColoredSubmitBtn : SubmitBtn} alt="img" />
          </button>
        </InputBox>
      </Wrapper>
    </>
  );
}

export default PostCommentBox;
