import React, { useState } from "react";
import styled from "styled-components";
import SubmitBtn from "../../css/icon/SubmitBtn.svg";

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
  }
  button {
    display: flex;
    justify-content: center;
  }
`;

function PostCommentBox() {
  const [input, setInput] = useState();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Wrapper>
      <InputBox>
        <input
          value={input}
          type="text"
          placeholder="답글을 입력하세요."
          onChange={handleInput}
        />
        <button>
          <img src={SubmitBtn} alt="img" />
        </button>
      </InputBox>
    </Wrapper>
  );
}

export default PostCommentBox;
