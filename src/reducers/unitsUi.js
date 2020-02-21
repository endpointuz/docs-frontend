import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const unitsUi = handleActions({
  [actions.getUnitsRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
  [actions.getUnitsFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getUnitsSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
}, {
  requestState: null,
});

export default unitsUi;
