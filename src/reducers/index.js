import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const counter = handleActions({
  [actions.inc](state, { payload }) {
    return payload;
  },
  [actions.dec](state, { payload }) {
    return payload;
  },
}, 0);

export default combineReducers({
  counter,
  form: formReducer,
});
