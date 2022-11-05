import React from "react";
import SearchBarAnimal from "./SearchBarAnimal";
import SearchBarCategory from "./SearchBarCategory";

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchBarAnimal />
      <SearchBarCategory />
    </div>
  );
}

export default SearchBar;
