import { border, input, CheckOption, upDown, counting } from "./CheckBox.css";

const CheckBox = () => {
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
                <input className={input} type="checkbox" /><label className={CheckOption}>지도교수 상담
                </label>
                <input className={counting} type="text" value={"0"}></input>
                <input className={upDown} type="button" value={"+"}></input>
                <input className={upDown} type="button" value={"-"}></input>
            </div>
        </div>
    );
};

export default CheckBox;