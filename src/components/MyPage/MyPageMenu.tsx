import { Link } from "react-router-dom";
import { menuWrapper, menuBox, profile, menuLink, pageLink, bold } from "./MyPageMenu.css";
import { useState } from 'react';

const MyPageMenu = () => {
  const [page, setPage] = useState(true);
  const onMenuClick = () => {
    setPage(!page);
  };
  return (
    <div className={menuWrapper}>
      <div className={profile}>
        <img src="img/knu_character.png" alt="" />
      </div>
      <Link role="link" onClick={onMenuClick} className={page ? `${pageLink} ${bold}` : pageLink} to="/page">
        개인정보
      </Link>
      <Link role="link" onClick={onMenuClick} className={page ? pageLink : `${pageLink} ${bold}`} to="pw-change">
        비밀번호 변경
      </Link>
    </div>
  );
};

export default MyPageMenu;
