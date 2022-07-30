import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const state = {
    id: "",
    pw: "",
  };

  const handleInputId = (e) => {
    this.useState({
      state,
      id: e.target.value,
    });
  };

  const handleInputpw = (e) => {
    this.useState({
      state,
      pw: e.target.value,
    });
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
    navigate("/Main");
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수

  return (
    <div className="Login-container">
      <h2>BulletinBoard Log-in</h2>
      <div>
        <label htmlFor="input_id"> ID : </label>
        <input
          input
          type="text"
          name="input_id"
          placeholder=""
          value={useState.id}
          onChange={handleInputId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          placeholder=""
          value={useState.pw}
          onChange={handleInputpw}
        />
      </div>
      <div>
        <button onClick={onClickLogin}>Login</button>
      </div>
      <div className="sign-up">
        <Link to="/SignUp">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
