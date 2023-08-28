import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Header, Board, WritePostBtn, PetRegisterModal } from "../components";
import { userSelector } from "../store";
import { useEffect } from "react";

export function HomePage() {
  const user = useRecoilValue(userSelector);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user.first && !user.hasPet) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [user]);

  return (
    <>
      <Header />
      <Board />
      <WritePostBtn />
      {isOpen && <PetRegisterModal {...{ isOpen, setIsOpen }} />}
    </>
  );
}

export default HomePage;
