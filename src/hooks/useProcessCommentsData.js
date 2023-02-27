import { useState, useEffect } from "react";
import { callCommentsApi } from "../api";
import { calcElapsedTime } from "../util";

function useProcessCommentsData(postId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await callCommentsApi(postId);
      const comments = await processCommentsData(response.data);
      setComments(comments);
    })();
  }, []);

  const commentsDataFormat = async ({
    commentId,
    author,
    address,
    content,
    depth,
    deleted,
    children,
    elapsedTime,
  }) => {
    return {
      commentId,
      userBadgeData: {
        userName: author,
        //api에서 데이터 빠져서 임의로 이미지 넣은 링크
        imgSrc:
          "http://petmo-storybook.site/static/media/avatar_no_img.deb0da5a.png",
        address: address,
        elapsedTime,
      },
      content,
      depth,
      deleted,
      children: depth === 1 ? await processCommentsData(children) : null,
    };
  };

  const createComments = async (commentsData) => {
    const createdDate = commentsData.createdData?.replace(" ", "T");
    const elapsedTime = calcElapsedTime(createdDate);
    const comments = await commentsDataFormat({ ...commentsData, elapsedTime });
    return comments;
  };

  const processCommentsDataReducer = async (commentsData, commentData) => {
    const comment = await createComments(commentData);
    return [...(await commentsData), comment];
  };

  const processCommentsData = (commentsData) =>
    commentsData.reduce(processCommentsDataReducer, []);

  return comments;
}

export default useProcessCommentsData;
