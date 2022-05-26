import React from "react";
import "./RegistrationPage.scss";
import InputBar from "../InputBar/InputBar.js";
import Button from "../Button/Button";

const RegistrationPage = () => {


	

	return (
		<form method="post">
			<div className="registrationPage">
				<div className="emailContainer">
					<div>Enter your name here: </div>
					<InputBar type={"text"} />
				</div>

				<div className="passwordContainer">
					<div>Enter your password here: </div>
					<InputBar type={"password"} />
				</div>

				<Button text={"Click here to register"} />
			</div>
		</form>
	);
};

export default RegistrationPage;
