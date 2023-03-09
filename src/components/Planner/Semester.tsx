import { useState } from "react";
import Class from "./Class";
import {
  plusSemester,
  SemesterBox,
  SemesterHeader,
  SemesterMain,
  SemesterText,
} from "./Semester.css";
interface SemesterProps {
  backGroundColor?: string;
  active?: boolean;
  grade?: number;
  semester?: string;
}

interface ClassProps {
  className?: string;
  classType?: string;
  classCredit?: string;
  active?: boolean;
}

const Semester = ({
  backGroundColor,
  active = true,
  semester,
  grade,
  ...props
}: SemesterProps) => {
  const [classList, setClassList] = useState<ClassProps[]>([]);
  return (
    <div className={SemesterBox}>
      <div className={SemesterHeader}>
        {active ? (
          <h4 className={SemesterText}>
            {grade}학년 {semester}학기
          </h4>
        ) : (
          <></>
        )}
      </div>

      <div className={SemesterMain}>
        {active ? (
          <>
            <Class className="수학 1" classCredit="3" classType="전공기반" />
            <Class className="수학 1" classCredit="3" classType="전공기반" />
            {classList &&
              classList.map(item => {
                <Class
                  className={item.className}
                  classCredit={item.classCredit}
                  classType={item.classType}
                />;
              })}
            <Class active={false} />
          </>
        ) : (
          <>
            <button className={plusSemester}>+</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Semester;
