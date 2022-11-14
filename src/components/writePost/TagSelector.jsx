import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { layout, sizes, colors, fontSizes, lineHeights } }) =>
    css`
      ${{
        ...layout.flex_aCenter_jBetween,
        ...sizes.size1,
        padding: "0 20px",
        fontSize: fontSizes.body2,
        lineHeight: lineHeights[150],
        borderTop: `1px solid ${colors.lineLight}`,
      }}
    `}
`;

const Placeholder = styled.span`
  color: ${({ theme: { colors } }) => colors.gray600};
`;

function TagSelector({ selectedTag, placeholder, onClick }) {
  return (
    <Wrapper tabIndex={0} onClick={onClick}>
      {selectedTag && <span>{selectedTag}</span>}
      {!selectedTag && <Placeholder>{placeholder}</Placeholder>}
      <img src={`${process.env.PUBLIC_URL}/img/bottom.svg`} alt="" />
    </Wrapper>
  );
}

TagSelector.propTypes = {
  selectedTag: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
};

export default TagSelector;
