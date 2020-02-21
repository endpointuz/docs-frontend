import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const banks = handleActions({
  [actions.getBanksSuccess](state, { payload: { banks: banksList } }) {
    return banksList;
  },
}, {});

export default banks;
