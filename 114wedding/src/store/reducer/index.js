import { combineReducers } from "redux";

import commonReducer from "./common";
import userReducer from "./user"

const rootReducer = {
  common: commonReducer,
  user: userReducer
};

export default combineReducers(rootReducer);
