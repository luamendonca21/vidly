import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <input
      value={value}
      style={{ borderRadius: 20 }}
      className="shadow m-0 w-100 form-control"
      type="search"
      placeholder="Search..."
      aria-label="Search"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default Search;
