import { AppWrapper } from "./App.css";
import { ModalProvider } from "./components/Modal/ModalContext";
import Curriculum from "./components/Curriculum/curriculum";
import Planner from "./components/Planner/planner";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useCallback, useState } from "react";

export interface IData {
  tasks: {
    [key: string]: {
      id: string;
      content: string;
      className?: string;
      classType?: string;
      classCredit?: string;
    };
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

//   { id: "crtl1", className: "test", classCredit: "3", classType: "전공" },
//   { id: "crtl2", className: "test", classCredit: "3", classType: "교양" },
//   { id: "crtl3", className: "test", classCredit: "3", classType: "전공필수" },
//   { id: "crtl4", className: "test", classCredit: "3", classType: "기본소양" },
const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "test1",
      className: "test1",
      classCredit: "3",
      classType: "전공",
    },
    "task-2": {
      id: "task-2",
      content: "test2",
      className: "test2",
      classCredit: "3",
      classType: "교양",
    },
    "task-3": {
      id: "task-3",
      content: "test3",
      className: "test3",
      classCredit: "3",
      classType: "전공필수",
    },
    "task-4": {
      id: "task-4",
      content: "test4",
      className: "test4",
      classCredit: "3",
      classType: "기본소양",
    },
    "task-5": {
      id: "task-5",
      content: "test5",
      className: "test5",
      classCredit: "3",
      classType: "기본소양",
    },
    "task-6": {
      id: "task-6",
      content: "test6",
      className: "test6",
      classCredit: "3",
      classType: "기본소양",
    },
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
      semester: 2,
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-6"],
      grade: 2,
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
