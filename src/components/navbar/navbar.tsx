import { Link, useLocation } from "react-router-dom";
import * as style from "./navbar.css";

const NavBar = () => {
  const link = useLocation();

  const navList = [
    { name: "Home", path: "/" },
    { name: "Summary", path: "/summary" },
    { name: "My Page", path: "/page" },
  ];

  return (
    <div>
      <ul className={style.navbarWrapper}>
        {navList.map(({ name, path }) => {
          console.log(path, link.pathname);
          if (link.pathname === path) {
            return (
              <Link className={style.underline} key={path} to={path}>
                {name}
              </Link>
            );
          }
          return (
            <Link className={style.navbarLink} key={path} to={path}>
              {name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
