import { Link, useLocation } from "react-router-dom";
import * as style from "./navbar.css";

interface LinkInterface {
  name: string;
  path: string;
}

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Summary", path: "/summary" },
  { name: "My Page", path: "/page" },
];

const ActiveNavLink = ({ name, path }: LinkInterface) => {
  return (
    <Link role="link" className={style.underline} to={path}>
      {name}
    </Link>
  );
};

const NavLink = ({ name, path }: LinkInterface) => {
  return (
    <Link role="link" className={style.navbarLink} to={path}>
      {name}
    </Link>
  );
};

const NavBar = () => {
  const link = useLocation();

  return (
    <nav>
      <ul className={style.navbarWrapper}>
        {navLinks.map(({ name, path }) => {
          const isActive = link.pathname === path;
          if (isActive)
            return <ActiveNavLink key={path} name={name} path={path} />;
          return <NavLink key={path} name={name} path={path} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
