import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;

function TagSelector({ placeholder, onClick }) {
  return (
    <Wrapper tabIndex={0} onClick={onClick}>
      {placeholder}
      <img src={`${process.env.PUBLIC_URL}/img/bottom.svg`} alt="" />
    </Wrapper>
  );
}

TagSelector.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
};

export default TagSelector;
