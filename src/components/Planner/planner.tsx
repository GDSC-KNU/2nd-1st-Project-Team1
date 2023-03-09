import { border } from "../../App.css";
import Summary from "./Summary";
import Semester from "./Semester";

const Planner = () => {
  return (
    <div className={border}>
      <h1>Planner</h1>
      <Summary />
      <Semester />
      <Semester />
      <Semester />
      <Semester />
    </div>
  );
};

export default Planner;
