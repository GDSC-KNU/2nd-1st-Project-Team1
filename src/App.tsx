import { AppWrapper } from "./App.css";
import { ModalProvider } from "./components/Modal/ModalContext";
import Curriculum from "./components/Curriculum/curriculum";
import Planner from "./components/Planner/planner";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useCallback, useState } from "react";

export interface IData {
  tasks: {
    [key: string]: { id: string; content: string };
  };
  columns: {
    [key: string]: {
      id: string;
      title: string;
      taskIds: string[];
      semester: number;
      grade: number;
    };
  };
  columnOrder: string[];
}

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
    "task-5": { id: "task-5", content: "Cook dinner" },
    "task-6": { id: "task-6", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
      grade: 1,
      semester: 1,
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: ["task-5"],
      grade: 1,
      semester: 1,
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-6"],
      grade: 1,
      semester: 1,
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
function App() {
  const [data, setData] = useState<IData>(initialData);
  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;

      const startColumn = data.columns[source.droppableId];
      const finishColumn = data.columns[destination.droppableId];
      console.log("start", startColumn, "finish", finishColumn);
      console.log("source droppadbleId", source.droppableId);
      console.log("destination droppableId", destination.droppableId);
      if (startColumn === finishColumn) {
        const newTaskIds = Array.from(startColumn.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...startColumn,
          taskIds: newTaskIds,
        };

        const newData = {
          ...data,
          columns: {
            ...data.columns,
            [newColumn.id]: newColumn,
          },
        };

        setData(newData);
      } else {
        const startTaskIds = Array.from(startColumn.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStartColumn = {
          ...startColumn,
          taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finishColumn.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinishColumn = {
          ...finishColumn,
          taskIds: finishTaskIds,
        };

        const newData = {
          ...data,
          columns: {
            ...data.columns,
            [newStartColumn.id]: newStartColumn,
            [newFinishColumn.id]: newFinishColumn,
          },
        };

        setData(newData);
      }
    },
    [data],
  );

  return (
    <ModalProvider>
      <div className={AppWrapper}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Planner data={data} />
          <Curriculum />
        </DragDropContext>
      </div>
    </ModalProvider>
  );
}

export default App;
