import React from "react";
import "./search-box.style.css";

export const SearchInput = ({ placeHolder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};

{
  /* <input
  type="search"
  placeholder="Search monster ..."
  onChange={(e) =>
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state.searchField)
    )
  }
/>; */
}
