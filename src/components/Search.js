import React from "react";

const Search = props => {
  return (
    <div>
      <input
        placeholder="Search anything..."
        type="text"
        value={props.search}
        onChange={props.onChangeSearch}
      />
    </div>
  );
};

export default Search;
