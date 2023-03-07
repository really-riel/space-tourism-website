import { createStore, action } from "easy-peasy";

export default createStore({
  isNavBtnClicked: false,
  setIsNavBtnClicked: action((state, payload) => {
    state.isNavBtnClicked = payload;
  }),
  dataTypeIndex: 0,
  setDataTypeIndex: action((state, payload) => {
    state.dataTypeIndex = payload;
  }),
});
