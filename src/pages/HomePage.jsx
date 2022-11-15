import React from "react";
import { FeedHeader, SearchBar, Board, Nav, WritePostBtn } from "../components";

export function HomePage() {
  return (
    <div>
      <FeedHeader />
      <SearchBar />
      <Board type={"part"} />
      <WritePostBtn />
      <Nav />
    </div>
  );
}

export default HomePage;
