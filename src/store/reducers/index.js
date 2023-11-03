import headerReducer from "./headerReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  headerReducer,
});

export default rootReducer;
