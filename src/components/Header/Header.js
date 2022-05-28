import React from "react";
import "./Header.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <div className='header'>
      <img
        className='logo'
        src='https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo'
        alt='logo'
      />
      <nav className='navbar'>
        {!user.userId && (
          <>
            <Link to='/login' className='item'>
              Login
            </Link>
            <Link to='/register' className='item'>
              Registration
            </Link>
          </>
        )}
        <Link to='/dashboard' className='item'>
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Header;
