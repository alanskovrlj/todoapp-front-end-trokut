import React from "react";
import "./Button.scss";

const Button = ({onClick, text }) => {
	return <input onClick={onClick} className="button" type="submit" value={text} />;
};

export default Button;
