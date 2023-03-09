import Credit from "./Credit";
import { CreditList } from "./Credit.css";
import { ListBox, List } from "./Summary.css";

const Summary = () => {
  return (
    <>
      <div>Header</div>
      <div className={CreditList}>
        <Credit />
        <Credit />
        <Credit />
        <Credit />
      </div>
    </>
  );
};

export default Summary;
