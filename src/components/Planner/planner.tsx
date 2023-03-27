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
        <Droppable droppableId="all-columns" type="column">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {temp &&
                temp.columnOrder &&
                temp.columnOrder.map((columnId, index) => {
                  const column = temp.columns[columnId];
                  const tasks = column.taskIds.map(
                    (taskId: string | number) => temp.tasks[taskId],
                  );
                  return (
                    <Semester
                      column={column}
                      tasks={tasks}
                      key={column.id}
                      index={index}
                      grade={column.grade}
                      semester={column.semester}
                    />
                  );
                })}
              {provided.placeholder}
            </div>
          )}
          {/* <Semester semester={1} grade={1} />
          {semesterList &&
            semesterList.map(semester => {
              // <Semester semester={semester.semester} grade={semester.grade} />;
              <Semester semester={semester.semester} grade={semester.grade} />;
            })}
          <Semester active={false} onClick={() => addSemester(testSemester)} /> */}
        </Droppable>
      </>
    </div>
  );
};

export default Planner;
