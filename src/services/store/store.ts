import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navgiationReducer from './reducers/navigationReducer';
const rootReducer = combineReducers({
  nav: navgiationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
