import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function CommonHeader({ leftButton, pageTitle, rightButton }) {
  return (
    <Wrapper>
      <LeftButton>{leftButton}</LeftButton>
      <Title>{pageTitle}</Title>
      <RightButton>{rightButton}</RightButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 56px;
`;

const Title = styled.span`
  margin: 0 auto;
`;

const LeftButton = styled.span`
  position: absolute;
`;

const RightButton = styled.span`
  position: absolute;
  right: 20px;
`;

CommonHeader.propTypes = {
  leftButton: PropTypes.node,
  pageTitle: PropTypes.node,
  rightButton: PropTypes.node,
};

export default CommonHeader;
