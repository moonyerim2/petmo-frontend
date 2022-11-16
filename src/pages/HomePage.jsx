import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  FeedHeader,
  SearchBar,
  Board,
  Nav,
  WritePostBtn,
  BottomModal,
  PetRegisterModalContent,
} from "../components";
import { userSelector } from "../store";
import { useEffect } from "react";

const StyledHeader = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export function HomePage() {
  const [user, setUser] = useRecoilState(userSelector);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(user.first);
  }, [user]);

  useEffect(() => {
    setUser({ ...user, first: false });
  }, []);

  return (
    <>
      <StyledHeader>
        <FeedHeader />
        <SearchBar />
      </StyledHeader>
      <Board />
      <WritePostBtn />
      <Nav />
      <BottomModal
        content={[<PetRegisterModalContent key={1} setIsOpen={setIsOpen} />]}
        isOpen={isOpen}
        onClickDimLayer={() => setIsOpen(false)}
      />
    </>
  );
}

export default HomePage;
