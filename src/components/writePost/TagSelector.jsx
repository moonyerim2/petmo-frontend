import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div``;

const SelectedTag = styled.div`
  ${({ theme }) => css`
    ${{ backgroundColor: theme.colors.main }}
  `}
`;

function TagSelector({ placeholder }) {
  return (
    <Wrapper tabIndex={0}>
      <SelectedTag />
      {placeholder}
      <img src={`${process.env.PUBLIC_URL}/img/bottom.svg`} alt="" />
    </Wrapper>
  );
}

TagSelector.propTypes = {
  placeholder: PropTypes.string,
};

export default TagSelector;
