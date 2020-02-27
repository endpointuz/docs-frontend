import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const drafts = handleActions({
  [actions.getDraftContractsSuccess](state, { payload: { list } }) {
    return { ...state, list };
  },
  [actions.getDraftDetailsSuccess](state, { payload: { contract } }) {
    return { ...state, current: contract };
  },
}, {
  list: [],
  current: {
    payment_conditions: '',
    delivery_conditions: '',
    customer_bank: '',
    supplier_country: '',
    currency: '',
    supplier_bank_country: '',
  },
});

export default drafts;
