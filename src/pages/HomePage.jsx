import React from "react";
import { Header, SearchBar, Board, Nav } from "../components";

export function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Board />
      <Nav />
    </div>
  );
}

export default HomePage;
