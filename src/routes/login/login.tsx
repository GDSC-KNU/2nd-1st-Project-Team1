import { useState } from "react";
import {
  loginContainer,
  capImage,
  input,
  loginButton,
  signUpGuide,
  signUpLink,
} from "./login.css";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const updateId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const updatePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  return (
    <div className={loginContainer}>
      <img className={capImage} src="img/graduation_cap.png" alt="" />
      <h1>CAN I GRADUATE?</h1>
      <form>
        <input
          className={input}
          type="text"
          placeholder="Enter your Student ID..."
          value={id}
          onChange={updateId}
        />
        <input
          className={input}
          type="password"
          placeholder="Enter your Password..."
          value={pw}
          onChange={updatePw}
        />
        <button className={loginButton}>Sign in</button>
      </form>
      <span className={signUpGuide}>New to CAN I GRADUATE?</span>
      <span className={signUpLink}>Create an account.</span>
    </div>
  );
};

export default Login;
