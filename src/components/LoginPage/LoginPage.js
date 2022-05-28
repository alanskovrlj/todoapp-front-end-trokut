import React from "react";
import "./LoginPage.scss";
//import InputBar from "../InputBar/InputBar.js";
import Button from "../Button/Button";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputChange,
  addWordToSentence,
  loadTodos,
  performLogin,
} from "../../redux/reducers/userSlice";

const LoginPage = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });

  const dispatch = useDispatch();
  const referenceName = useRef(null);
  const referencePass = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(performLogin({ name: user.inputName, pass: user.inputPass }));
  };

  return (
    <form method='post' onSubmit={(e) => handleSubmit(e)}>
      <div className='loginPage'>
        <div className='emailContainer'>
          <div>Enter your name here: </div>
          <input
            type='text'
            ref={referenceName}
            onChange={() =>
              dispatch(
                handleInputChange({
                  val: referenceName.current.value,
                  type: "inputName",
                })
              )
            }
            value={user.inputName}></input>
        </div>

        <div className='passwordContainer'>
          <div>Enter your password here: </div>

          <input
            type='text'
            ref={referencePass}
            onChange={() =>
              dispatch(
                handleInputChange({
                  val: referencePass.current.value,
                  type: "inputPass",
                })
              )
            }
            value={user.inputPass}></input>
        </div>

        <Button text={"Click here to login"} />
      </div>
    </form>
  );
};

export default LoginPage;
