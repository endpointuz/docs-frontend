import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const currencies = handleActions({
  [actions.getCurrenciesSuccess](state, { payload: { currencies: currenciesList } }) {
    return currenciesList;
  },
}, {});

export default currencies;
