import Summary from "./Summary";
import Semester from "./Semester";
import { useState } from "react";
import { PlannerContainer } from "./Planner.css";
import SemesterDnd from "./SemesterDnd";

interface SemesterProps {
  backGroundColor?: string;
  active?: boolean;
  grade?: number;
  semester?: number;
}

const Planner = () => {
  const [semesterList, setSemesterList] = useState<SemesterProps[]>([]);
  const addSemester = (item: SemesterProps) => {
    setSemesterList([...semesterList, item]);
  };
  const testSemester: SemesterProps = {
    grade: 4,
    semester: 4,
  };
  return (
    <div className={PlannerContainer}>
      <>
        <Summary />
        <Semester semester={1} grade={1} />
        <SemesterDnd semester={1} grade={2} />
        {semesterList &&
          semesterList.map(semester => {
            // <Semester semester={semester.semester} grade={semester.grade} />;
            <SemesterDnd semester={semester.semester} grade={semester.grade} />;
          })}
        <Semester active={false} onClick={() => addSemester(testSemester)} />
      </>
    </div>
  );
};

export default Planner;
