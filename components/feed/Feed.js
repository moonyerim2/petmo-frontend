import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Board } from "./Board";
import { Nav } from "./Nav";

export const Feed = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Board />
      <Nav />
    </div>
  );
};
