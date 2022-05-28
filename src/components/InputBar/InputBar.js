import React from "react";
import "./InputBar.scss";

const SearchBar = ({ type, value }) => {
  return <input className='searchbar' type={type} value={value} />;
};

export default SearchBar;
