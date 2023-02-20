import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  Header,
  Board,
  Nav,
  WritePostBtn,
  BottomModal,
  PetRegisterModalContent,
} from "../components";
import { userSelector } from "../store";
import { useEffect } from "react";

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
      <Header />
      <Board />
      <WritePostBtn />
      <Nav />
      {isOpen && (
        <BottomModal
          content={[<PetRegisterModalContent key={1} setIsOpen={setIsOpen} />]}
          isOpen={isOpen}
          onClickDimLayer={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default HomePage;
