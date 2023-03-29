import { useContext, useState } from "react";
import { ClassBox, deleteClass, plusClass } from "./Class.css";
import { Draggable } from "react-beautiful-dnd";
import { ModalContext } from "../Modal/ModalContext";
import DeleteClassModal from "../Modal/DeleteClassModal";

interface ClassProps {
  className?: string;
  classType?: string;
  classCredit?: string;
  active?: boolean;
  id: string;
  index: number;
}

interface ITaskProps {
  course: {
    id: string;
    content: string;
    className?: string;
    classType?: string;
    classCredit?: string;
  };

  index: number;
}
const Class = ({ course, index }: ITaskProps) => {
  // const isDragDisabled = course.id === "course-1";

  const [open, setOpen] = useState("");
  const { openModal, open: modalOpen } = useContext(ModalContext);
  const ModalOpen = (check: string) => {
    console.log(check);
    // setOpen(true);
    openModal();
    if (!modalOpen) {
      return <></>;
    }
    if (check == "delete") {
      setOpen(check);
      return <DeleteClassModal />;
    }
  };
  return (
    <>
      {open == "delete" && modalOpen && <DeleteClassModal />}
      <Draggable
        key={course.id}
        draggableId={course.id}
        index={index}
        // isDragDisabled={isDragDisabled}
      >
        {provided => (
          <div
            className={ClassBox}
            key={course.id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            // isDragDisabled={isDragDisabled}
          >
            {course.content}
            <br />
            {course.classType}
            <button className={deleteClass} onClick={() => ModalOpen("delete")}>
              x
            </button>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Class;
