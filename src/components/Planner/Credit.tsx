import { CreditTitle, CreditPoint, CreditBox } from "./Credit.css";

interface CreditProps {
  backgroundColor?: string;
}

const Credit = ({ backgroundColor, ...props }: CreditProps) => {
  return (
    <div className={CreditBox}>
      <p className={CreditTitle}>기본소양</p>
      <p className={CreditPoint}>3 / 15</p>
    </div>
  );
};

export default Credit;
