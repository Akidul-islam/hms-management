import { SOME_ACTION_TYPE } from '../actions/actionTypes';

export const someActionCreator = (payload: object) => ({
  type: SOME_ACTION_TYPE,
  payload,
});
