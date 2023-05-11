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
  semesterBlock?: { id: string; title: string; courseIds: string[] };
  courses?: {
    id: string;
    content: string;
  }[];
  index?: number;
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
  const [open, setOpen] = useState("");
  const ModalOpen = (check: string) => {
    console.log(check);
    // setOpen(true);

    if (!modalOpen) {
      return <></>;
    }
    if (check == "add") {
      openModal();
      setOpen(check);
      return <AddSemesterModal />;
    }
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
        {open == "add" && modalOpen && <AddSemesterModal />}
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
                      courses.map((course, idx) => (
                        <Class key={course.id} course={course} index={idx} />
                      ))}
                    {provided.placeholder}
                  </>
                </ul>
              )}
            </Droppable>
          ) : (
            <>
              <button className={plusSemester} onClick={() => ModalOpen("add")}>
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
