import CheckBox from "./CheckBox";
import CreditState from "./CreditState";
import Graph from "./Graph";
import { SummaryContainerWrapper } from "./SummaryContainer.css";

const SummaryContainer = () => {
  return (
    <>
      <div className={SummaryContainerWrapper}>
        <Graph />
        <CreditState />
      </div>
      <CheckBox />
    </>
  );
};

export default SummaryContainer;
