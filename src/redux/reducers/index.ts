import { combineReducers } from 'redux';
import navgiationReducer from './navigationReducer';

const rootReducer = combineReducers({
  nav: navgiationReducer,
});

export default rootReducer;
