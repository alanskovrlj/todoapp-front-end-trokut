import React from "react";
import "./LoginPage.scss";
//import InputBar from "../InputBar/InputBar.js";
import Button from "../Button/Button";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputChange,
  performLogin,
  INPUT_NAME,
  INPUT_PASS,
} from "../../redux/reducers/userSlice";

const LoginPage = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const referenceName = useRef(null);
  const referencePass = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      performLogin({
        name: user.inputs[INPUT_NAME],
        pass: user.inputs[INPUT_PASS],
      })
    );
  };

  return (
    <>
      {!user.userId ? (
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
                      type: INPUT_NAME,
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
                      type: INPUT_PASS,
                    })
                  )
                }
                value={user.inputPass}></input>
            </div>
            {user.loginStatus !== "" && <p>{user.loginStatus}</p>}

            <Button text={"Click here to login"} />
          </div>
        </form>
      ) : (
        navigate("/dashboard", { replace: true })
      )}
    </>
  );
};

export default LoginPage;
