import { useContext, useEffect, useState } from "react";
import AddSemesterModal from "../Modal/AddSemesterModal";
import Class from "./Class";
import {
  plusSemester,
  SemesterBox,
  SemesterCredit,
  SemesterHeader,
  SemesterMain,
  SemesterText,
} from "./Semester.css";
import { ModalContext } from "../Modal/ModalContext";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { ClassBox, List, ListBox } from "./Class.css";
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
  id: string;
}

interface ITaskList {
  isDraggingOver: boolean;
}

interface IColumnProps {
  semesterBlock: { id: string; title: string; courseIds: string[] };
  courses?: {
    id: string;
    content: string;
  }[];
  index: number;
  backGroundColor?: string;
  active?: boolean;
  grade?: number;
  semester?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Semester = ({
  backGroundColor,
  active = true,
  semester,
  grade,
  onClick,
  semesterBlock,
  courses,
  index,
}: IColumnProps) => {
  // const [classList, setClassList] = useState<ClassProps[]>([
  //   { id: "crtl1", className: "test", classCredit: "3", classType: "전공" },
  //   { id: "crtl2", className: "test", classCredit: "3", classType: "교양" },
  //   { id: "crtl3", className: "test", classCredit: "3", classType: "전공필수" },
  //   { id: "crtl4", className: "test", classCredit: "3", classType: "기본소양" },
  // ]);
  // const [open, setOpen] = useState<boolean>();
  const { openModal, open: modalOpen } = useContext(ModalContext);
  const ModalOpen = () => {
    // setOpen(true);
    openModal();
    if (!modalOpen) {
      return <></>;
    }
    return <AddSemesterModal />;
  };
  return (
    // <Draggable draggableId=  semesterBlock.id} index={index}>
    //   {provided => (
    <>
      <div
        className={SemesterBox}
        // ref={provided.innerRef}
        // {...provided.draggableProps}
      >
        {modalOpen && <AddSemesterModal />}
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
          {semesterBlock && active ? (
            <Droppable droppableId={semesterBlock.id}>
              {provided => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  <>
                    {courses &&
                      courses.map((task, idx) => (
                        <Class key={task.id} task={task} index={idx} />
                      ))}
                    {provided.placeholder}
                  </>
                </ul>
              )}
              {/* {provided => (
                  <ul
                    className={List}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h4 className={SemesterCredit}>9학점</h4>
                    <>
                      {courses.map((task, idx) => {
                        return (
                            {provided => (
                              <li
                                className={ListBox}
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                              >
                                <Class
                                  // className={item.className}
                                  // classCredit={item.classCredit}
                                  // classType={item.classType}
                                  key={task.id}
                                  task={task}
                                  index={idx}
                                />
                              </li>
                            )}
                        );
                      })}
                    </>
                    {provided.placeholder}
                  </ul>
                )} */}
            </Droppable>
          ) : (
            <>
              <button className={plusSemester} onClick={() => ModalOpen()}>
                +
              </button>
            </>
          )}
        </div>
      </div>
      {/* )} */}
      {/* // </Draggable> */}
    </>
  );
};

export default Semester;
