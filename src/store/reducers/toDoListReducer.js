import { produce } from "immer";
import { ADD_NEW_CATEGORY } from "constants/actionTypes";
import { TO_DO_HEADERS } from "constants/constants";

const initialState = {
  categories: TO_DO_HEADERS,
};

const toDoListReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY:
      let newType = {
        idx: new Date().toLocaleTimeString(),
        name: action.payload.catergoryName,
      };
      return {
        ...draft,
        categories: [...draft.categories, newType],
      };

    default:
      return draft;
  }
}, initialState);

export default toDoListReducer;
