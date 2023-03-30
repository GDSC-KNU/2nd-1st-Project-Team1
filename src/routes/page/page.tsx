import { Route, Routes } from "react-router";
import BasicInfo from "../../components/MyPage/BasicInfo";
import MyPageMenu from "../../components/MyPage/MyPageMenu";
import { myPageWrapper } from "./page.css";
import PwChange from "../../components/MyPage/PwChange";

const Page = () => {
  return (
    <div className={myPageWrapper}>
      <MyPageMenu />
      <Routes>
        <Route path="/" element={<BasicInfo />} />
        <Route path="/pw-change" element={<PwChange />} />
      </Routes>
    </div>
  );
};

export default Page;
