import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import NavBarList from "./NavBarList";
import cancelBtn from "../shared/icon-close.svg";

const DropBar = () => {
  const isNavBtnClicked = useStoreState((state) => state.isNavBtnClicked);
  const setIsNavBtnClicked = useStoreActions(
    (actions) => actions.setIsNavBtnClicked
  );

  return (
    <nav className={`dropBar ${isNavBtnClicked ? "slide-in" : "slide-out"} `}>
      <figure>
        <img
          src={cancelBtn}
          alt="Close Dropbar"
          onClick={() => setIsNavBtnClicked(!isNavBtnClicked)}
        />
      </figure>
      <NavBarList />
    </nav>
  );
};

export default DropBar;
