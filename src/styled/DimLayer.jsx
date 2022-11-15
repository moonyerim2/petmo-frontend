import styled from "styled-components";

export const DimLayer = styled.div`
  display: block;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  z-index: 999;
`;
