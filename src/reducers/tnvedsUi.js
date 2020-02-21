import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const tnvedsUi = handleActions({
  [actions.getTNVEDSRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
  [actions.getTNVEDSFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getTNVEDSSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
}, {
  requestState: null,
});

export default tnvedsUi;
