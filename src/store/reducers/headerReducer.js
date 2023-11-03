import { produce } from "immer";
import { ADD_NEW_CATEGORY_BUTTON } from "constants/actionTypes";

const initialState = {
  addNewCatModelOpenStatus: false,
};

const headerReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY_BUTTON:
      return {
        ...draft,
        addNewCatModelOpenStatus: !draft.addNewCatModelOpenStatus,
      };

    default:
      return draft;
  }
}, initialState);

export default headerReducer;
