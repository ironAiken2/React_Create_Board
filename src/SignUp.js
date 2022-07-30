import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onClickSignIn = () => {
    console.log("click login");
    navigate("/");
  };

  return (
    <div className="SingUp-container">
      <h1>BulletinBoard</h1>
      <h2>Sign-Up</h2>
      <div>
        <label htmlFor="input_id"> ID : </label>
        <input input type="text" name="input_id" placeholder="" />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input type="password" name="input_pw" placeholder="" />
      </div>
      <div>
        <label htmlFor="input_pw">Name : </label>
        <input type="password" name="input_pw" placeholder="" />
      </div>
      <div>
        <button onClick={onClickSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignUp;
