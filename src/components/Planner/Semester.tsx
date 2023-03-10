import { useState } from "react";
import Class from "./Class";
import {
  plusSemester,
  SemesterBox,
  SemesterCredit,
  SemesterHeader,
  SemesterMain,
  SemesterText,
} from "./Semester.css";
interface SemesterProps {
  backGroundColor?: string;
  active?: boolean;
  grade?: number;
  semester?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
  onClick,
  // semesterList,
  ...props
}: SemesterProps) => {
  const [classList, setClassList] = useState<ClassProps[]>([]);
  const addItem = (item: ClassProps) => {
    setClassList([...classList, item]);
  };
  // const testSemester: SemesterProps = {
  //   grade: 4,
  //   semester: 4,
  //   onClick
  // };
  return (
    <div className={SemesterBox}>
      <div className={SemesterHeader}>
        {active ? (
          <h4 className={SemesterText}>
            {grade}학년 {semester}학기
          </h4>
        ) : (
          <h4 className={SemesterText}></h4>
        )}
      </div>

      <div className={SemesterMain}>
        {active ? (
          <>
            <h4 className={SemesterCredit}>9학점</h4>
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
            <button
              className={plusSemester}
              onClick={() => {
                onClick;
                console.log(1);
              }}
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Semester;
