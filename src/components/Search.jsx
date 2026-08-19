import React from "react";

function Search({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Type a name to search..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default Search;



