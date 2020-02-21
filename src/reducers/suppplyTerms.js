import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const supplyTerms = handleActions({
  [actions.getSupplyTermsSuccess](state, { payload: { supplyTerms: supplyTermsList } }) {
    return supplyTermsList;
  },
}, {});

export default supplyTerms;
