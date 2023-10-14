import { produce } from 'immer';
const initialState = {};

const tempReducer = produce((draft, action) => {
  switch (action.type) {
    case '':
      return draft;

    default:
      return draft;
  }
}, initialState);

export default tempReducer;
