import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: white;
  border-bottom: 1px solid #e5e5ec;
`;

const HeaderTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  margin-left: 20px;

  color: #111111;
`;

function PageHeader2({ pageTitle }) {
  return (
    <Wrapper>
      <HeaderTitle>{pageTitle}</HeaderTitle>
    </Wrapper>
  );
}

PageHeader2.propTypes = {
  pageTitle: PropTypes.string,
};

export default PageHeader2;
