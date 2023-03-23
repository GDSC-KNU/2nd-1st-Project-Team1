import { useContext, useState } from "react";
import BackgroundModal from "../Modal/BackgroundModal";
import AddClassModal from "../Modal/AddSemesterModal";
import { ClassBox, deleteClass, plusClass } from "./Class.css";

interface ClassProps {
  className?: string;
  classType?: string;
  classCredit?: string;
  active?: boolean;
  id?: number;
}

const Class = ({
  className,
  classType,
  classCredit,
  id,
  active = true,
}: ClassProps) => {
  return (
    <div className={ClassBox}>
      {active ? (
        <>
          <h3>{className}</h3>
          <h5>
            {classType} {classCredit}
          </h5>
          <button className={deleteClass} onClick={() => console.log(1)}>
            x
          </button>
        </>
      ) : (
        <>
          <button
            className={plusClass}
            onClick={() => console.log("plusClass")}
          >
            +
          </button>
        </>
      )}
    </div>
  );
};

export default Class;
