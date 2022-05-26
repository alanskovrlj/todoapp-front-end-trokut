import React from "react";
import "./Button.scss";

const Button = ({ text }) => {
	return <input className="button" type="submit" value={text} />;
};

export default Button;
