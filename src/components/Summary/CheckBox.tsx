import { border, input, CheckOption, upDown, counting, saveButton, countButton } from "./CheckBox.css";
import { useState } from 'react';

const CheckBox = () => {
    const [count, setCount] = useState(0);
    const onPlusClick = () => {
        if (count < 8)
            setCount(count + 1);
    };
    const onMinusClick = () => {
        if (count > 0)
            setCount(count - 1);
    }

    return (
        <div className={border}>
            <div>
                <input className={input} type="checkbox" /><label className={CheckOption}>첨성인 기초</label>
                <input className={input} type="checkbox" /><label className={CheckOption}>첨성인 핵심 - 인문사회</label>
                <input className={input} type="checkbox" /><label className={CheckOption}>첨성인 핵심 - 자연과학</label>
                <input className={input} type="checkbox" /><label className={CheckOption}>인문교양</label>
            </div>
            <div>
                <input className={input} type="checkbox" /><label className={CheckOption}>어학성적</label>
                <input className={input} type="checkbox" /><label className={CheckOption}>현장실습</label>
                <input className={input} type="checkbox" /><label className={CheckOption}>지도교수 상담</label>
                <span style={{fontWeight: "bold"}}>{count}</span>
                <button className={countButton} onClick={onPlusClick}>+</button>
                <button className={countButton} onClick={onMinusClick}>-</button>
                <button className={saveButton}>저장</button>
            </div>
        </div>
    );
};

export default CheckBox;