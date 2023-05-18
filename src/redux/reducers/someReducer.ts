import { SOME_ACTION_TYPE } from '../actions/actionTypes';

const initialState = {
  someState: null,
};

const someReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SOME_ACTION_TYPE:
      return {
        ...state,
        someState: action.payload,
      };
    default:
      return state;
  }
};

export default someReducer;
