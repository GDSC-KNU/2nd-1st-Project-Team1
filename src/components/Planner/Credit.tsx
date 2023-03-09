import { CreditItem, CreditBox } from "./Credit.css";

interface CreditProps {
  backgroundColor?: string;
}

const Credit = ({ backgroundColor, ...props }: CreditProps) => {
  return (
    <div className={CreditBox}>
      <h2 className={CreditItem}>기본소양</h2>
      <h2 className={CreditItem}>3 / 15</h2>
    </div>
  );
};

export default Credit;
