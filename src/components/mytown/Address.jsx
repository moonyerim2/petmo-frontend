import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { colors, layout, sizes, borderRadius } }) =>
    css`
      ${{
        ...layout.flex_aCenter_jBetween,
        ...sizes.size1,
        padding: "16px 16px 16px 12px",
        backgroundColor: colors.main,
        borderRadius: borderRadius.small,
        color: colors.white,
      }}
    `}
`;

const AddressText = styled.span`
  ${({ theme: { colors, fontSizes, lineHeights } }) =>
    css`
      ${{
        color: colors.white,
        fontSize: fontSizes.body1,
        fontWeight: "500",
        lineHeight: lineHeights[150],
      }}
    `}
`;

function Address({ town }) {
  return (
    <Wrapper>
      <AddressText>{town}</AddressText>
      <DeleteButton />
    </Wrapper>
  );
}

Address.propTypes = {
  town: PropTypes.string,
};

export default Address;
