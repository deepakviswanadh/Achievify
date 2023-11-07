import { produce } from "immer";
import { ADD_MODAL_CATEGORY, MOCK_STORE_IMGS } from "constants/actionTypes";

const initialState = {
  modalType: null,
  fetchedData: [],
};

const appLevelReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_MODAL_CATEGORY:
      return {
        ...draft,
        modalType: action.payload.modalType,
      };
    case MOCK_STORE_IMGS:
      return { ...draft, fetchedData: action.payload.imgList };
    default:
      return draft;
  }
}, initialState);

export default appLevelReducer;
