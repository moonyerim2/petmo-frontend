import React from "react";
import { Header, SearchBar, Board, Nav, WritePostBtn } from "../components";

export function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Board />
      <WritePostBtn />
      <Nav />
    </div>
  );
}

export default HomePage;
