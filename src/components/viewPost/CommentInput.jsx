import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import CommentInputInfomation from "./CommentInputInfomation";
import CommentSubmitButton from "./CommentSubmitButton";
import { commentToWhoAtom, commentPayloadIdsAtom } from "../../store";
import { callAddCommentsApi, callAddReplyCommentsApi } from "../../api";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.white};
`;

const InputForm = styled.form`
  ${({ theme: { color, fontSize, layout } }) => {
    return css`
      ${{
        ...layout.flex_aCenter_jBetween,
        color: color.gray600,
        fontSize: fontSize.body1,
        padding: "0 20px",
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

function CommentInput({ inputRef }) {
  const [input, setInput] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [{ commentToWho }, setCommentToWho] = useRecoilState(commentToWhoAtom);
  const [commentPayloadIds, setCommentPayloadIds] = useRecoilState(
    commentPayloadIdsAtom
  );

  useEffect(() => {
    if (!input)
      setCommentPayloadIds((prevState) => {
        return { ...prevState, commentId: "" };
      });
  }, [input]);

  useEffect(() => {
    if (submitTrigger) {
      const payload = {
        ...commentPayloadIds,
        content: inputRef.current.value,
      };

      if (!payload.commentId) {
        delete payload.commentId;
        callAddCommentsApi(payload);
      } else {
        callAddReplyCommentsApi(payload);
      }

      setSubmitTrigger(false);
    }
  }, [submitTrigger, commentPayloadIds]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitTrigger(true);
  };

  const handleFocus = () => {
    setShowInfo(true);
  };

  const handleBlur = () => {
    setCommentToWho((prevState) => {
      return { ...prevState, commentToWho: prevState.postAuthor };
    });
    setShowInfo(false);
    setSubmitTrigger(false);
  };

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <Wrapper>
      {showInfo ? <CommentInputInfomation commentToWho={commentToWho} /> : null}
      <InputForm onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="답글을 입력하세요."
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <CommentSubmitButton isDisabled={!input} />
      </InputForm>
    </Wrapper>
  );
}

CommentInput.propTypes = {
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default CommentInput;
