import { produce } from "immer";
import { ADD_MODAL_CATEGORY } from "constants/actionTypes";

const initialState = {
  modalType: null,
};

const appLevelReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_MODAL_CATEGORY:
      return {
        ...draft,
        modalType: action.payload.modalType,
      };

    default:
      return draft;
  }
}, initialState);

export default appLevelReducer;
