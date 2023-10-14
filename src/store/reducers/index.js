import mockReducer from './mockReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  mockReducer,
});

export default rootReducer;
