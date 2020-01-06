import { combineReducers } from "redux";

import commonReducer from "./common";

const rootReducer = {
  common: commonReducer
};

export default combineReducers(rootReducer);
