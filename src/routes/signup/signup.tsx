import { useState } from "react";
import {
  capImage,
  input,
  majorSelect,
  semesterSelect,
  signInGuide,
  signInLink,
  signupButton,
  signupContainer,
} from "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [grade, setGrade] = useState(1);
  const [semester, setSemester] = useState(1);
  const [pw, setPw] = useState("");

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const updateId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMajor(e.target.value);
  };

  const onGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(parseInt(e.target.value));
  };

  const onSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(parseInt(e.target.value));
  };

  const updatePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  return (
    <div className={signupContainer}>
      <img className={capImage} src="img/graduation_cap.png" alt="" />
      <h1>CAN I GRADUATE?</h1>
      <form>
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
          <option value="컴퓨터학부 심화컴퓨터전공">
            컴퓨터학부 심화컴퓨터전공
          </option>
          <option value="컴퓨터학부 글로벌SW융합전공">
            컴퓨터학부 글로벌SW융합전공
          </option>
          <option value="전자공학부">전자공학부</option>
        </select>
        <br />
        <select
          className={semesterSelect}
          style={{ marginRight: "2%" }}
          onChange={onGradeChange}
        >
          <option value={1}>1학년</option>
          <option value={2}>2학년</option>
          <option value={3}>3학년</option>
          <option value={4}>4학년</option>
        </select>
        <select className={semesterSelect} onChange={onSemesterChange}>
          <option value={1}>1학기</option>
          <option value={2}>2학기</option>
        </select>
        <input
          className={input}
          type="password"
          placeholder="Enter your Password..."
          value={pw}
          onChange={updatePw}
        />
        <button className={signupButton}>Sign in</button>
      </form>
      <span className={signInGuide}>Already have an account?</span>
      <span className={signInLink}>Sign in</span>
    </div>
  );
};

export default SignUp;
