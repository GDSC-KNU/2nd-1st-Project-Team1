import { AppWrapper } from "./App.css";
import { ModalProvider } from "./components/Modal/ModalContext";
import Curriculum from "./components/Curriculum/curriculum";
import Planner from "./components/Planner/planner";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useCallback, useState } from "react";

export interface IData {
  courses: {
    [key: string]: {
      id: string;
      content: string;
      className?: string;
      classType?: string;
      classCredit?: string;
    };
  };
  semesterBlocks: {
    [key: string]: {
      id: string;
      title: string;
      courseIds: string[];
      semester: number;
      grade: number;
    };
  };
  semesterBlockOrder: string[];
}

//   { id: "crtl1", className: "test", classCredit: "3", classType: "전공" },
//   { id: "crtl2", className: "test", classCredit: "3", classType: "교양" },
//   { id: "crtl3", className: "test", classCredit: "3", classType: "전공필수" },
//   { id: "crtl4", className: "test", classCredit: "3", classType: "기본소양" },
const initialData = {
  courses: {
    "course-1": {
      id: "course-1",
      content: "test1",
      className: "test1",
      classCredit: "3",
      classType: "전공",
    },
    CLTR0045: {
      id: "CLTR0045",
      content: "test1",
      className: "test1",
      classCredit: "3",
      classType: "전공",
    },
    "course-2": {
      id: "course-2",
      content: "test2",
      className: "test2",
      classCredit: "3",
      classType: "교양",
    },
    "course-3": {
      id: "course-3",
      content: "test3",
      className: "test3",
      classCredit: "3",
      classType: "전공필수",
    },
    "course-4": {
      id: "course-4",
      content: "test4",
      className: "test4",
      classCredit: "3",
      classType: "기본소양",
    },
    "course-5": {
      id: "course-5",
      content: "test5",
      className: "test5",
      classCredit: "3",
      classType: "기본소양",
    },
    "course-6": {
      id: "course-6",
      content: "test6",
      className: "test6",
      classCredit: "3",
      classType: "기본소양",
    },
  },
  semesterBlocks: {
    "semesterBlock-0": {
      id: "semesterBlock-0",
      title: "test",
      courseIds: [],
      grade: 0,
      semester: 0,
    },
    "semesterBlock-1": {
      id: "semesterBlock-1",
      title: "To do",
      courseIds: ["course-1", "course-2", "course-3", "course-4"],
      grade: 1,
      semester: 1,
    },
    "semesterBlock-2": {
      id: "semesterBlock-2",
      title: "In progress",
      courseIds: ["course-5"],
      grade: 1,
      semester: 2,
    },
    "semesterBlock-3": {
      id: "semesterBlock-3",
      title: "Done",
      courseIds: ["course-6"],
      grade: 2,
      semester: 1,
    },
  },
  semesterBlockOrder: [
    "semesterBlock-0",
    "semesterBlock-1",
    "semesterBlock-2",
    "semesterBlock-3",
  ],
};
function App() {
  const [data, setData] = useState<IData>(initialData);
  // const [newCourse, setNewCourse] = useState();
  // const newData = {
  //   ...data,
  //   courses: {
  //     ...data.courses,
  //   },
  // };
  // setData(newData);
  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;

      const startsemesterBlock = data.semesterBlocks[source.droppableId];
      const finishsemesterBlock = data.semesterBlocks[destination.droppableId];
      console.log("result", result);
      if (startsemesterBlock === finishsemesterBlock) {
        const newcourseIds = Array.from(startsemesterBlock.courseIds);
        newcourseIds.splice(source.index, 1);
        newcourseIds.splice(destination.index, 0, draggableId);

        const newsemesterBlock = {
          ...startsemesterBlock,
          courseIds: newcourseIds,
        };

        const newData = {
          ...data,
          semesterBlocks: {
            ...data.semesterBlocks,
            [newsemesterBlock.id]: newsemesterBlock,
          },
        };

        setData(newData);
      } else if (source.droppableId == "semesterBlock-0") {
        console.log("curriculum");
        console.log(startsemesterBlock);
        console.log(finishsemesterBlock);

        const finishcourseIds = Array.from(finishsemesterBlock.courseIds);
        console.log("destination.index", destination.index);
        finishcourseIds.splice(destination.index, 0, draggableId);
        console.log("finishcourseIds", finishcourseIds);
        console.log("draggableId", draggableId);
        const newFinishsemesterBlock = {
          ...finishsemesterBlock,
          courseIds: finishcourseIds,
        };
        console.log("finishsemesterBlock", newFinishsemesterBlock.courseIds);
        const newData = {
          ...data,
          semesterBlocks: {
            ...data.semesterBlocks,
            [newFinishsemesterBlock.id]: newFinishsemesterBlock,
          },
        };
        setData(newData);
      } else {
        const startcourseIds = Array.from(startsemesterBlock.courseIds);
        startcourseIds.splice(source.index, 1);
        const newStartsemesterBlock = {
          ...startsemesterBlock,
          courseIds: startcourseIds,
        };

        const finishcourseIds = Array.from(finishsemesterBlock.courseIds);
        finishcourseIds.splice(destination.index, 0, draggableId);
        const newFinishsemesterBlock = {
          ...finishsemesterBlock,
          courseIds: finishcourseIds,
        };

        const newData = {
          ...data,
          semesterBlocks: {
            ...data.semesterBlocks,
            [newStartsemesterBlock.id]: newStartsemesterBlock,
            [newFinishsemesterBlock.id]: newFinishsemesterBlock,
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
