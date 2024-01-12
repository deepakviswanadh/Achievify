import { produce } from "immer";
import { DISPATCH_YEAR_CHANGE } from "constants/actionTypes";

const initialState = {
  selectedYear: "",
};

const calenderReducer = produce((draft, action) => {
  switch (action.type) {
    case DISPATCH_YEAR_CHANGE:
      return {
        ...draft,
        selectedYear: action.payload,
      };
    default:
      return draft;
  }
}, initialState);

export default calenderReducer;
