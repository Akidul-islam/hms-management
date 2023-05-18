import { combineReducers } from 'redux';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  someReducer,
});

export default rootReducer;
