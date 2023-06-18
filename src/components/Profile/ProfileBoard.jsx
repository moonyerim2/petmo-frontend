import React from "react";
import styled from "styled-components";
import { UserProfile } from "../../components";
import PropTypes from "prop-types";
import ProfileTab from "./ProfileTab";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 604px;
  background: #f0f0f6;
`;

const PostWrapper = styled.div`
  height: 437px;
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  margin-top: 8px;
`;

function ProfileBoard({ userProfile, userPosts, userComments }) {
  return (
    <Wrapper>
      <UserProfile
        username={userProfile.username}
        regionDepth2={userProfile.regionDepth2}
        animals={userProfile.animals}
      ></UserProfile>
      <PostWrapper>
        <ProfileTab userPosts={userPosts} userComments={userComments} />
      </PostWrapper>
    </Wrapper>
  );
}

export default ProfileBoard;

ProfileBoard.propTypes = {
  userProfile: PropTypes.object,
  userPosts: PropTypes.array,
  userComments: PropTypes.array,
};
