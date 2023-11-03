import headerReducer from "./headerReducer";
import appLevelReducer from "./appLevelReducer";
import toDoListReducer from "./toDoListReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  headerReducer,
  appLevelReducer,
  toDoListReducer,
});

export default rootReducer;
