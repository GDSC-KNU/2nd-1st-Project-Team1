import { AppWrapper } from "./App.css";
import { ModalProvider } from "./components/Modal/ModalContext";
import Curriculum from "./components/Curriculum/curriculum";
import Planner from "./components/Planner/planner";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useState } from "react";

function App() {
  const [classList, setClassList] = useState([]);
  const [demoList, setDemoList] = useState([]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    console.log(result.destination.droppableId);
    if (result.destination.droppableId == "communities") {
      const items = [...classList];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setClassList(items);
    }
    if (result.destination.droppableId == "demos") {
      const items = [...demoList];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setDemoList(items);
    }
  };
  return (
    <ModalProvider>
      <div className={AppWrapper}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Planner />
          <Curriculum />
        </DragDropContext>
      </div>
    </ModalProvider>
  );
}

export default App;
