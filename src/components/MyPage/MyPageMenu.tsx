import { Link, useLocation } from "react-router-dom";
import { menuWrapper, menuBox, profile, menuLink, underline } from "./MyPageMenu.css";

const MyPageMenu = () => {
  return (
    <div className={menuWrapper}>
      <div className={profile}>
        <img src="img/knu_character.png" />
      </div>
      <ul className={menuBox}>
        <li className={menuLink}>개인정보</li>
        <li className={menuLink}>비밀번호 변경</li>
      </ul>
    </div>
  );
};

export default MyPageMenu;