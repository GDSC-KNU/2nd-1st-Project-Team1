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

const initialData = {
  courses: {
    // "course-1": {
    //   id: "course-1",
    //   content: "test1",
    //   className: "test1",
    //   classCredit: "3",
    //   classType: "전공",
    // },
    // "course-2": {
    //   id: "course-2",
    //   content: "test2",
    //   className: "test2",
    //   classCredit: "3",
    //   classType: "교양",
    // },
    // "course-3": {
    //   id: "course-3",
    //   content: "test3",
    //   className: "test3",
    //   classCredit: "3",
    //   classType: "전공필수",
    // },
    // "course-4": {
    //   id: "course-4",
    //   content: "test4",
    //   className: "test4",
    //   classCredit: "3",
    //   classType: "기본소양",
    // },
    // "course-5": {
    //   id: "course-5",
    //   content: "test5",
    //   className: "test5",
    //   classCredit: "3",
    //   classType: "기본소양",
    // },
    // "course-6": {
    //   id: "course-6",
    //   content: "test6",
    //   className: "test6",
    //   classCredit: "3",
    //   classType: "기본소양",
    // },
  },
  semesterBlocks: {
    "semesterBlock-1": {
      id: "semesterBlock-1",
      title: "1학년 1학기",
      courseIds: [],
      grade: 1,
      semester: 1,
    },
    "semesterBlock-2": {
      id: "semesterBlock-2",
      title: "1학년 여름학기",
      courseIds: [],
      grade: 1,
      semester: 2,
    },
    "semesterBlock-3": {
      id: "semesterBlock-3",
      title: "1학년 2학기",
      courseIds: [],
      grade: 1,
      semester: 3,
    },
    "semesterBlock-4": {
      id: "semesterBlock-4",
      title: "1학년 겨울학기",
      courseIds: [],
      grade: 1,
      semester: 4,
    },
    "semesterBlock-5": {
      id: "semesterBlock-5",
      title: "2학년 1학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-6": {
      id: "semesterBlock-6",
      title: "2학년 여름학기",
      courseIds: [],
      grade: 2,
      semester: 2,
    },
    "semesterBlock-7": {
      id: "semesterBlock-7",
      title: "2학년 2학기",
      courseIds: [],
      grade: 2,
      semester: 3,
    },
    "semesterBlock-8": {
      id: "semesterBlock-8",
      title: "2학년 겨울학기",
      courseIds: [],
      grade: 2,
      semester: 4,
    },
    "semesterBlock-9": {
      id: "semesterBlock-9",
      title: "3학년 1학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-10": {
      id: "semesterBlock-10",
      title: "3학년 여름학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-11": {
      id: "semesterBlock-11",
      title: "3학년 2학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-12": {
      id: "semesterBlock-12",
      title: "3학년 겨울학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-13": {
      id: "semesterBlock-13",
      title: "4학년 1학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-14": {
      id: "semesterBlock-14",
      title: "4학년 여름학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-15": {
      id: "semesterBlock-15",
      title: "4학년 2학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
    "semesterBlock-16": {
      id: "semesterBlock-16",
      title: "4학년 겨울학기",
      courseIds: [],
      grade: 2,
      semester: 1,
    },
  },
  semesterBlockOrder: [
    "semesterBlock-1",
    "semesterBlock-2",
    "semesterBlock-3",
    "semesterBlock-4",
    "semesterBlock-5",
    "semesterBlock-6",
    "semesterBlock-7",
    "semesterBlock-8",
    "semesterBlock-9",
    "semesterBlock-10",
    "semesterBlock-11",
    "semesterBlock-12",
    "semesterBlock-13",
    "semesterBlock-14",
    "semesterBlock-15",
    "semesterBlock-16",
  ],
};
function App() {
  const [data, setData] = useState<IData>(initialData);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      console.log(result);

      const { destination, source, draggableId } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;

      const startsemesterBlock = data.semesterBlocks[source.droppableId];
      const finishsemesterBlock = data.semesterBlocks[destination.droppableId];

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
      } else if (result.source.droppableId == "CurruclumBlocks") {
        console.log("curriculum");
        console.log(typeof draggableId);
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
          courses: {
            ...data.courses,
            [draggableId]: {
              id: draggableId,
              content: draggableId,
              className: draggableId,
              classCredit: "3",
              classType: "test",
            },
          },
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
