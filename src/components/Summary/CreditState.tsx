import { border, CreditSpan, CreditType, Table, TableBorder } from "./CreditState.css";
import { useState } from 'react';


const CreditState = () => {

    return (
        <div className={border}>
            <table className={Table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>남은 학점</th>
                        <th>들은 학점</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button className={CreditType}>기본소양</button></td>
                        <td><span className={CreditSpan}>0</span> 학점</td>
                        <td><span className={CreditSpan}>0</span> 학점</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><button className={CreditType}>전공기반</button></td>
                        <td><span className={CreditSpan}>0</span> 학점</td>
                        <td><span className={CreditSpan}>0</span> 학점</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><button className={CreditType}>공학전공</button></td>
                        <td><span className={CreditSpan}>12</span> 학점</td>
                        <td><span className={CreditSpan}>12</span> 학점</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><button className={CreditType}>기타</button></td>
                        <td><span className={CreditSpan}>0</span> 학점</td>
                        <td><span className={CreditSpan}>0</span> 학점</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td></td>
                        <td className={TableBorder}>총 <span className={CreditSpan}>0</span> 학점</td>
                        <td className={TableBorder}>총 <span className={CreditSpan}>0</span> 학점</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CreditState;