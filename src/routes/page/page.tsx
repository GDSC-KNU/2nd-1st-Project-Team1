import BasicInfo from "../../components/MyPage/BasicInfo";
import MyPageMenu from "../../components/MyPage/MyPageMenu";
import { myPageWrapper } from "./page.css";

const Page = () => {
  return (
    <div className={myPageWrapper}>
      <MyPageMenu />
      <BasicInfo />
    </div>
  )};

  export default Page;
