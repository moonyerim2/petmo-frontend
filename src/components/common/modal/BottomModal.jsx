import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

const DimLayer = styled.div`
  ${() =>
    css`
      ${{
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: "100%",
        height: "100vh",
      }}
    `}
`;

const Content = styled.div`
  ${({ theme: { colors } }) =>
    css`
      ${{
        position: "absolute",
        left: 0,
        bottom: 0,
        padding: "24px 20px",
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: "16px 16px 0 0",
      }}
    `}
`;

function BottomModal({ content, closeModal }) {
  const onClickDimLayer = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  return (
    <DimLayer onClick={onClickDimLayer}>
      <Content>{content}</Content>
    </DimLayer>
  );
}

BottomModal.propTypes = {
  content: PropTypes.node,
  closeModal: PropTypes.func,
};

export default BottomModal;
