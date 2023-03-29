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
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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

const Semester = ({
  backGroundColor,
  active = true,
  semester,
  grade,
  onClick,
  // semesterList,
  ...props
}: SemesterProps) => {
  const [classList, setClassList] = useState<ClassProps[]>([
    { id: "crtl1", className: "test", classCredit: "3", classType: "전공" },
    { id: "crtl2", className: "test", classCredit: "3", classType: "교양" },
    { id: "crtl3", className: "test", classCredit: "3", classType: "전공필수" },
    { id: "crtl4", className: "test", classCredit: "3", classType: "기본소양" },
  ]);
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
  const addItem = (item: ClassProps) => {
    setClassList([...classList, item]);
  };
  const testSemester: SemesterProps = {
    grade: 4,
    semester: 4,
    onClick,
  };
  classList.map((item: ClassProps, idx: number) => {
    console.log(item, idx);
  });
  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...classList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setClassList(items);
  };
  // if (classList === null) return <>?</>;

  useEffect(() => {
    console.log(classList);
  }, [classList]);
  return (
    <div className={SemesterBox}>
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
        {active ? (
          <DragDropContext onDragEnd={handleChange}>
            <Droppable droppableId="communities">
              {provided => (
                <ul
                  className={List}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h4 className={SemesterCredit}>9학점</h4>
                  <>
                    {classList &&
                      classList.map((item, idx) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={idx}
                          >
                            {provided => (
                              <li
                                className={ListBox}
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                              >
                                <Class
                                  className={item.className}
                                  classCredit={item.classCredit}
                                  classType={item.classType}
                                  id={idx}
                                />
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                  </>
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <>
            <button className={plusSemester} onClick={() => ModalOpen()}>
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Semester;