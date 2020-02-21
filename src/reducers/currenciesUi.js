import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const currenciesUi = handleActions({
  [actions.getCurrenciesRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
  [actions.getCurrenciesFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getCurrenciesSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
}, {
  requestState: null,
});

export default currenciesUi;
