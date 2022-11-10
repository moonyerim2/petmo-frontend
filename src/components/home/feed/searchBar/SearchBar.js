import React from "react";
import SearchBarAnimal from "./SearchBarAnimal";
import SearchBarCategory from "./SearchBarCategory";

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchBarCategory />
      <SearchBarAnimal />
    </div>
  );
}

export default SearchBar;
