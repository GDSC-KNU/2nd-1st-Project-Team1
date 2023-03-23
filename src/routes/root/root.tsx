import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import { rootWrapper } from "./root.css";

const Root = () => {
  return (
    <div className={rootWrapper}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
