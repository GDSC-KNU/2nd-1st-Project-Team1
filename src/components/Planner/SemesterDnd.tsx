import { useContext, useState } from "react";
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
  // const testSemester: SemesterProps = {
  //   grade: 4,
  //   semester: 4,
  //   onClick
  // };

  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...classList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setClassList(items);
  };
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
                <>
                  <h4 className={SemesterCredit}>9학점</h4>
                  {classList &&
                    classList.map((item: any, idx: number) => {
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={idx}
                      >
                        {provided => (
                          <li
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <Class
                              className={item.className}
                              classCredit={item.classCredit}
                              classType={item.classType}
                            />
                          </li>
                        )}
                      </Draggable>;
                    })}
                  {/* <Class active={false} /> */}
                </>
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
