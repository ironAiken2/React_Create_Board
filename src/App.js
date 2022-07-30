import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
