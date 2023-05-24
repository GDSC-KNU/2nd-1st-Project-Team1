import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  capImage,
  input,
  majorSelect,
  signInGuide,
  signInLink,
  signupButton,
  signupContainer,
} from "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("심화컴퓨터공학");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const updateId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMajor(e.target.value);
  };

  const updatePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const baseURL = "https://canigraduate.duckdns.org:443";

    const signUpInfo = {
      classId: id,
      userPw: pw,
      name: name,
      department: major
    };
    
    axios({
      method: "post",
      url: baseURL + "/api/user/signup",
      data: signUpInfo,
    }).then((res) => {
      console.log(res);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    });
  };

  const onSignInClick = () => {
    navigate("/login");
  };

  return (
    <div className={signupContainer}>
      <img className={capImage} src="img/graduation_cap.png" alt="" />
      <h1>CAN I GRADUATE?</h1>
      <form onSubmit={onSignUp}>
        <input
          className={input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
        <input
          className={input}
          type="text"
          placeholder="Student Id"
          value={id}
          onChange={updateId}
          inputMode="numeric"
        />
        <select className={majorSelect} onChange={onMajorChange}>
          <option value="심화컴퓨터공학">
            컴퓨터학부 심화컴퓨터전공
          </option>
          <option value="글로벌SW융합전공">
            컴퓨터학부 글로벌SW융합전공
          </option>
          {/* <option value="전자공학부">전자공학부</option> */}
        </select>
        <input
          className={input}
          type="password"
          placeholder="Enter your Password..."
          value={pw}
          onChange={updatePw}
        />
        <button className={signupButton}>Sign up</button>
      </form>
      <span className={signInGuide}>Already have an account?</span>
      <span className={signInLink} onClick={onSignInClick}>
        Sign in
      </span>
    </div>
  );
};

export default SignUp;
