import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { callAddCommentsApi, callAddReplyCommentsApi } from "../api";
import { commentPayloadIdsAtom } from "../store";

function useSubmitComment(input) {
  const [submitTrigger, setSubmitTrigger] = useState(false);
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
        content: input,
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

  return { setSubmitTrigger };
}

export default useSubmitComment;
