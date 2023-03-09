import { CreditItem, CreditBox } from "./Credit.css";

interface CreditProps {
  backgroundColor?: string;
}

const Credit = ({ backgroundColor, ...props }: CreditProps) => {
  return (
    <div className={CreditBox}>
      <p className={CreditItem}>기본소양</p>
      <p className={CreditItem}>3 / 15</p>
    </div>
  );
};

export default Credit;
