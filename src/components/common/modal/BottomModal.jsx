import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

const DimLayer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  ${({ theme: { colors } }) =>
    css`
      ${{
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 9999,
        padding: "24px 20px",
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: "16px 16px 0 0",
      }}
    `}
`;

const List = styled.div`
  overflow: hidden;
`;

const Items = styled.div`
  display: flex;
  flexwrap: nowrap;
  transform: ${({ turn }) => `translateX(-${turn}00%)`};
  transition: transform 700ms;
`;

const Item = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

function BottomModal({
  content,
  index,
  isOpen,
  onClickDimLayer,
  onClickModal,
}) {
  const onClickDim = (e) => {
    if (e.target !== e.currentTarget) return;
    onClickDimLayer(e);
  };

  return (
    <DimLayer isOpen={isOpen} onClick={onClickDim}>
      <Content>
        <List onClick={onClickModal}>
          <Items turn={index}>
            {content.map((item, i) => (
              <Item key={i}>{item}</Item>
            ))}
          </Items>
        </List>
      </Content>
    </DimLayer>
  );
}

BottomModal.propTypes = {
  content: PropTypes.node,
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  onClickDimLayer: PropTypes.func,
  onClickModal: PropTypes.func,
};

export default BottomModal;
