import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const paymentTermsList = handleActions({
  [actions.getPaymentTermsSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
  [actions.getPaymentTermsFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getPaymentTermsRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
}, {
  requestState: null,
});

export default paymentTermsList;
