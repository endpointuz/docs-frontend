import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const banksUi = handleActions({
  [actions.getBanksSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
  [actions.getBanksFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getBanksRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
}, {
  requestState: null,
});

export default banksUi;
