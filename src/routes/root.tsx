import { Outlet } from "react-router-dom";
import { rootWrapper } from "./root.css";

const Root = () => {
  return (
    <div className={rootWrapper}>
      <h1>Root</h1>
      <Outlet />
    </div>
  );
};

export default Root;
