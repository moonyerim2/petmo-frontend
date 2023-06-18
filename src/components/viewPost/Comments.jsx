import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import { Comment } from "petmo-design-system";
import { useRecoilValue } from "recoil";
import { user } from "../../store";
import { commentToWhoAtom } from "../../store";

function Comments({ onClickReply, comments }) {
  const { username } = useRecoilValue(user);
  const setCommentToWho = useSetRecoilState(commentToWhoAtom);

  const handleOnClickReply = (commentToWho, commentId) => {
    setCommentToWho((prevState) => {
      return {
        ...prevState,
        commentToWho: commentToWho,
      };
    });
    onClickReply(commentId);
  };

  return (
    <>
      {comments.map(
        ({ commentId, userBadgeData, content, depth, children }) => {
          const isMyComment = userBadgeData.userName === username;
          return (
            <Fragment key={commentId}>
              <Comment
                {...{
                  isMyComment,
                  userBadgeData,
                  content,
                  depth,
                  onClickReply: () =>
                    handleOnClickReply(userBadgeData.userName, commentId),
                }}
              />
              {depth !== 2 && <Comments comments={children} />}
            </Fragment>
          );
        }
      )}
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array,
  onClickReply: PropTypes.func,
};

export default Comments;
