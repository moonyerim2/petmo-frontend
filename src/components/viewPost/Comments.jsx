import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Comment } from "petmo-design-system";
import { useRecoilValue } from "recoil";
import { user } from "../../store";

function Comments({ comments }) {
  const nickName = useRecoilValue(user);

  return (
    <>
      {comments.map(
        ({ commentId, userBadgeData, content, depth, children }) => {
          const isMyComment = userBadgeData.userName === nickName;
          return (
            <Fragment key={commentId}>
              <Comment {...{ isMyComment, userBadgeData, content, depth }} />
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
};

export default Comments;
