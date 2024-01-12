import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
import appLevelReducer from "./appLevelReducer";
import toDoListReducer from "./toDoListReducer";
import calenderReducer from "./calenderReducer";

const rootReducer = combineReducers({
  headerReducer,
  appLevelReducer,
  toDoListReducer,
  calenderReducer,
});

export default rootReducer;
