import { ClassBox } from "./Class.css";

interface ClassProps {
  className?: string;
  classType?: string;
  classCredit?: string;
  active?: boolean;
}

const Class = ({
  className,
  classType,
  classCredit,
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
        </>
      ) : (
        <>
          <p>+</p>
        </>
      )}
    </div>
  );
};

export default Class;
