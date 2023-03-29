import { useContext, useState } from "react";
import BackgroundModal from "../Modal/BackgroundModal";
import AddClassModal from "../Modal/AddSemesterModal";
import { ClassBox, deleteClass, plusClass } from "./Class.css";
import { Draggable } from "react-beautiful-dnd";

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
  return (
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
          <button className={deleteClass} onClick={() => console.log(1)}>
            x
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Class;
