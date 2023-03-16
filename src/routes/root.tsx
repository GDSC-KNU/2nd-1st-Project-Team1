import { Outlet } from "react-router-dom";
import { rootWrapper } from "./root.css";

const Root = () => {
  return (
    <div className={rootWrapper}>
      <Outlet />
    </div>
  );
};

export default Root;
