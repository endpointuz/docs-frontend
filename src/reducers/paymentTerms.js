import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const paymentTerms = handleActions({
  [actions.getPaymentTermsSuccess](state, { payload: { paymentTerms: paymentTermsList } }) {
    return paymentTermsList;
  },
}, {});

export default paymentTerms;
