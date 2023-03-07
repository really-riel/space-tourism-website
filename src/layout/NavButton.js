import React from "react";
import hambuger from "../shared/icon-hamburger.svg";
import { useStoreActions, useStoreState } from "easy-peasy";

const NavButton = () => {
  const setIsNavBtnClicked = useStoreActions(
    (actions) => actions.setIsNavBtnClicked
  );
  const isNavBtnClicked = useStoreState((state) => state.isNavBtnClicked);

  return (
    <img
      className="hamburger"
      src={hambuger}
      alt="dropBar button"
      onClick={() => setIsNavBtnClicked(!isNavBtnClicked)}
    />
  );
};

export default NavButton;
