import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const offersUi = handleActions({
  [actions.createOfferSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
  [actions.createOfferFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.createOfferRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
}, {
  requestState: null,
});

export default offersUi;
