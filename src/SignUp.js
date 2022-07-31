import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = React.useState();
  const onChangeId = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  }
  
  const [pw, setPw] = React.useState();
  const onChangePw = (event) => {
    console.log(event.target.value);
    setPw(event.target.value);
  }

  const [name, setName] = React.useState();
  const onChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const onClickSignIn = () => {
    console.log("click login");

    if(localStorage.getItem(id)){
      alert("중복된 아이디입니다!.");
    } else {
      localStorage.setItem(name, id);
      localStorage.setItem(id , pw);

      alert("회원가입 성공!");
      navigate("/");
    }
  };

  
  return (
    <div className="SingUp-container">
      <h1>BulletinBoard</h1>
      <h2>Sign-Up</h2>
      <div>
        <label htmlFor="input_id"> ID : </label>
        <input
         value = {id} 
         input type="text" 
         name="input_id"
         placeholder="" 
         onChange={onChangeId}
         />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input 
        value = {pw}
        type="password" 
        name="input_pw" 
        placeholder="" 
        onChange={onChangePw}
        />
      </div>
      <div>
        <label htmlFor="input_Name">Name : </label>
        <input 
        value = {name}
        type="text" 
        name="input_Name" 
        placeholder="" 
        onChange={onChangeName}
        />
      </div>
      <div>
        <button onClick={onClickSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignUp;
