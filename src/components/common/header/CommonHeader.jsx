import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HeaderTitle } from "../../../styled";

function CommonHeader({ leftButton, pageTitle, rightButton }) {
  return (
    <Wrapper>
      <LeftButton>{leftButton}</LeftButton>
      <HeaderTitle>{pageTitle}</HeaderTitle>
      <RightButton>{rightButton}</RightButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
`;

const LeftButton = styled.span`
  position: absolute;
`;

const RightButton = styled.span`
  position: absolute;
  right: 0;
`;

CommonHeader.propTypes = {
  leftButton: PropTypes.node,
  pageTitle: PropTypes.string,
  rightButton: PropTypes.node,
};

export default CommonHeader;
