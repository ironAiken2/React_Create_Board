import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const [id, InputId] = React.useState();
  const onChangeId = (event) => {
    console.log(event.target.value);
    InputId(event.target.value);
  }
  
  const [pw, InputPw] = React.useState();
  const onChangePw = (event) => {
    console.log(event.target.value);
    InputPw(event.target.value);
  }

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");

    if(localStorage.getItem(id) && localStorage.getItem(id) === pw){
      alert("로그인 성공!");
      navigate("/Main");
    } else {
      alert("로그인 실패! 아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수

  return (
    <div className="Login-container">
      <h2>BulletinBoard Log-in</h2>
      <div>
        <label htmlFor="input_id"> ID : </label>
        <input
          value={id}
          type="text"
          name="input_id"
          placeholder=""
          onChange={onChangeId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          value={pw}
          type="password"
          name="input_pw"
          placeholder=""
          onChange={onChangePw}
        />
      </div>
      <div>
        <button onClick={onClickLogin}>Login</button>
      </div>
      <div className="sign-up">
        회원이 아니시라면? 　　
        <Link to="/SignUp">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
