import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "./todos";
import Homepage from "./homepage";
import LoginPage from "./LoginPage";
import Register from "./register";
import Dashboard from "./dashboard";

function index() {
  return (
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/todos' element={<Todos></Todos>}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
  );
}

export default index;
