import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const countriesUi = handleActions({
  [actions.getCountriesRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
  [actions.getCountriesFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getCountriesSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
}, {
  requestState: null,
});

export default countriesUi;
