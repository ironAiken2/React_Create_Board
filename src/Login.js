import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
    navigate("/Main");
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수

  return (
    <div className="board-container">
      <h2>BulletinBoard Log-in</h2>
      <div>
        <label htmlFor="input_id"> ID : </label>
        <input
          input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
          placeholder=""
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </div>
      <div>
        <button onClick={onClickLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
