import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const NavBarList = () => {
  const isNavBtnClicked = useStoreState((state) => state.isNavBtnClicked);
  const setIsNavBtnClicked = useStoreActions(
    (actions) => actions.setIsNavBtnClicked
  );
  const { pathname } = useLocation();
  return (
    <ul>
      <li className={pathname === "/" ? "selected" : null}>
        <NavLink to={"/"} onClick={() => setIsNavBtnClicked(!isNavBtnClicked)}>
          HOME
        </NavLink>
      </li>
      <li className={pathname === "/destination" ? "selected" : null}>
        <NavLink
          to={"/destination"}
          onClick={() => setIsNavBtnClicked(!isNavBtnClicked)}
        >
          DESTINATION
        </NavLink>
      </li>
      <li className={pathname === "/crew" ? "selected" : null}>
        <NavLink
          to={"crew"}
          onClick={() => setIsNavBtnClicked(!isNavBtnClicked)}
        >
          CREW
        </NavLink>
      </li>
      <li className={pathname === "/technology" ? "selected" : null}>
        <NavLink
          to={"technology"}
          onClick={() => setIsNavBtnClicked(!isNavBtnClicked)}
        >
          TECHNOLOGY
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBarList;
