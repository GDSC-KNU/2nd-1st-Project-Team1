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
  task: {
    id: string;
    content: string;
    className?: string;
    classType?: string;
    classCredit?: string;
  };

  index: number;
}
const Class = ({ task, index }: ITaskProps) => {
  // const isDragDisabled = task.id === "task-1";
  return (
    <Draggable
      key={task.id}
      draggableId={task.id}
      index={index}
      // isDragDisabled={isDragDisabled}
    >
      {provided => (
        <div
          className={ClassBox}
          key={task.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragDisabled={isDragDisabled}
        >
          {task.content}
          <br />
          {task.classType}
          <button className={deleteClass} onClick={() => console.log(1)}>
            x
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Class;
