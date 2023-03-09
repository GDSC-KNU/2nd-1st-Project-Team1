import Class from "./Class";
import {
  SemesterBox,
  SemesterHeader,
  SemesterMain,
  SemesterText,
} from "./Semester.css";
interface SemesterProps {
  backGroundColor?: string;
}

const Semester = ({ backGroundColor, ...props }: SemesterProps) => {
  return (
    <div className={SemesterBox}>
      <div className={SemesterHeader}>
        <h4 className={SemesterText}>1학년 1학기</h4>
      </div>
      <div className={SemesterMain}>
        <Class className="수학 1" classCredit="3" classType="전공기반" />
        <Class className="수학 1" classCredit="3" classType="전공기반" />
        <Class active={false} />
      </div>
    </div>
  );
};

export default Semester;
