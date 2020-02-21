import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const supplyTermsUi = handleActions({
  [actions.getSupplyTermsRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
  [actions.getSupplyTermsFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getSupplyTermsSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
}, {
  requestState: null,
});

export default supplyTermsUi;
