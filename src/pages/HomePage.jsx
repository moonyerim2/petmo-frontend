import React from "react";
import { FeedHeader, SearchBar, Board, Nav, WritePostBtn } from "../components";

export function HomePage() {
  return (
    <div>
      <FeedHeader />
      <SearchBar />
      <Board />
      <WritePostBtn />
      <Nav />
    </div>
  );
}

export default HomePage;
