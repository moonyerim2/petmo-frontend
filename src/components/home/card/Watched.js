import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Number = styled.span`
  margin-left: 2px;
`;
function Watched({ viewCount }) {
  return (
    <>
      <span>조회수</span>
      <Number>{viewCount}</Number>
    </>
  );
}

Watched.propTypes = {
  viewCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Watched;
