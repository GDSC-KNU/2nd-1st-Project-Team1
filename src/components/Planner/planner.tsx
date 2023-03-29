import Summary from "./Summary";
import Semester from "./Semester";
import { useEffect, useState } from "react";
import { PlannerContainer } from "./Planner.css";
import { Droppable, Id } from "react-beautiful-dnd";
import { IData } from "../../App";

interface SemesterProps {
  backGroundColor?: string;
  active?: boolean;
  grade?: number;
  semester?: number;
}

const Planner = ({ data }: { data: IData }) => {
  const [temp, setTemp] = useState<IData>(data);

  useEffect(() => {
    if (data) setTemp(data);
  }, [data]);
  // const [semesterList, setSemesterList] = useState<SemesterProps[]>([]);
  // const addSemester = (item: SemesterProps) => {
  //   setSemesterList([...semesterList, item]);
  // };
  // const testSemester: SemesterProps = {
  //   grade: 4,
  //   semester: 4,
  // };
  return (
    <div className={PlannerContainer}>
      <>
        <Summary />
        <Droppable droppableId="all-semesterBlocks" type="semesterBlock">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {temp &&
                temp.semesterBlockOrder &&
                temp.semesterBlockOrder.map((semesterId, index) => {
                  const semesterBlock = temp.semesterBlocks[semesterId];
                  const courses = semesterBlock.courseIds.map(
                    (taskId: string | number) => temp.courses[taskId],
                  );
                  return (
                    <Semester
                      semesterBlock={semesterBlock}
                      courses={courses}
                      key={semesterBlock.id}
                      index={index}
                      grade={semesterBlock.grade}
                      semester={semesterBlock.semester}
                    />
                  );
                })}
              <Semester active={false} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </>
    </div>
  );
};

export default Planner;
