import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [UserInfo, content] = useState({
    id: "",
    pw: "",
  });
  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (event) => {
    const data = event.target.value;
    content({
      ...UserInfo,
      id: data,
    });
    console.log(content);
  };

  const handleInputPw = (event) => {
    const data = event.target.value;
    content({
      ...UserInfo,
      pw: data,
    });
    console.log(content);
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
          onChange={handleInputId}
          placeholder=""
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input type="password" name="input_pw" onChange={handleInputPw} />
      </div>
      <div>
        <button onClick={onClickLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
