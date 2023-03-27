import { hr, infoLabel, infoInput, majorSelect, semesterSelect, saveButton } from "./BasicInfo.css";
import { useState } from "react";

const BasicInfo = () => {
  const [major, setMajor] = useState("컴퓨터학부 심화컴퓨터전공");
  const [grade, setGrade] = useState(1);
  const [semester, setSemester] = useState(1);
  
  const onMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMajor(e.target.value);
  };

  const onGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(parseInt(e.target.value));
  };

  const onSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(parseInt(e.target.value));
  };

  return (
    <div>
      <h2>기본 정보</h2>
      <hr className={hr} />
      <label className={infoLabel}>이름</label>
      <input className={infoInput} type="text" value="호반우" disabled />
      <label className={infoLabel}>학번</label>
      <input className={infoInput} type="text" value="12345678" disabled />
      <label className={infoLabel}>전공</label>
      <select className={majorSelect} onChange={onMajorChange}> 
        <option value="컴퓨터학부 심화컴퓨터전공">컴퓨터학부 심화컴퓨터전공</option>
        <option value="컴퓨터학부 글로벌SW융합전공">컴퓨터학부 글로벌SW융합전공</option>
        <option value="전자공학부">전자공학부</option>
      </select>
      <label className={infoLabel}>학년/학기</label>
      <select className={semesterSelect} style={{marginRight: "2%"}} onChange={onGradeChange}> 
        <option value={1}>1학년</option>
        <option value={2}>2학년</option>
        <option value={3}>3학년</option>
        <option value={4}>4학년</option>
      </select>
      <select className={semesterSelect} onChange={onSemesterChange}> 
        <option value={1}>1학기</option>
        <option value={2}>2학기</option>
      </select>
      <button className={saveButton}>저장</button>
    </div>
  );
};

export default BasicInfo;
