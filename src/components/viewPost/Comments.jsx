import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Comment } from "petmo-design-system";
import { useRecoilValue } from "recoil";
import { user } from "../../store";

const Wrapper = styled.div`
  padding: 20px 20px 0;
`;

function Comments({ comments }) {
  const nickName = useRecoilValue(user);

  return (
    <Wrapper>
      {comments.map(
        ({ commentId, userBadgeData, content, depth, children }) => {
          const isMyComment = userBadgeData.userName === nickName;
          return (
            <Fragment key={commentId}>
              <Comment {...{ isMyComment, userBadgeData, content, depth }} />
              <Comments comments={children || []} />
            </Fragment>
          );
        }
      )}
    </Wrapper>
  );
}

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
