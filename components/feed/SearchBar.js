import React from "react";
import { SearchBarAnimal } from "./SearchBarAnimal";
import { SearchBarCategory } from "./SearchBarCategory";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchBarAnimal />
      <SearchBarCategory />
    </div>
  );
};
