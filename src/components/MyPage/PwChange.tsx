import { hr, pwChagneButton, pwInput, pwLabel } from "./PwChange.css";
import { useEffect, useState } from "react";

const PwChange = () => {
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isDifferent, setIsDifferent] = useState(false);

  const onCurrentPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPw(e.target.value);
  };

  const onNewPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPw(e.target.value);
  };

  const onConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.target.value);
  };

  useEffect(() => {
    if (confirmPw.length > 0 && newPw !== confirmPw) setIsDifferent(true);
    else setIsDifferent(false);
  }, [newPw, confirmPw]);

  return (
    <div>
      <h2>비밀번호 변경</h2>
      <hr className={hr} />
      <label className={pwLabel}>현재 비밀번호</label>
      <input
        className={pwInput}
        type="password"
        value={currentPw}
        onChange={onCurrentPwChange}
      />
      <label className={pwLabel}>새 비밀번호</label>
      <input
        className={pwInput}
        type="password"
        value={newPw}
        onChange={onNewPwChange}
      />
      <label className={pwLabel}>
        비밀번호 확인 <span>{isDifferent ? "⚠️" : ""}</span>
      </label>
      <input
        className={pwInput}
        type="password"
        value={confirmPw}
        onChange={onConfirmPwChange}
      />
      <button className={pwChagneButton}>변경</button>
    </div>
  );
};

export default PwChange;
