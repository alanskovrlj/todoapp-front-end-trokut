import React from "react";
import "./InputBar.scss";

const SearchBar = ({ type }) => {
	return <input className="searchbar" type={type} />;
};

export default SearchBar;
