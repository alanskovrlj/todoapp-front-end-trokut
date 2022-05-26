import React from "react";
import "./LoginPage.scss";
import InputBar from "../InputBar/InputBar.js";
import Button from "../Button/Button";

const LoginPage = () => {
	return (
		<form method="post">
			<div className="loginPage">
				<div className="emailContainer">
					<div>Enter your name here: </div>
					<InputBar type={"text"} />
				</div>

				<div className="passwordContainer">
					<div>Enter your password here: </div>

					<InputBar type={"password"} />
				</div>

				<Button text={"Click here to login"} />
			</div>
		</form>
	);
};

export default LoginPage;
