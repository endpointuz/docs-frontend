import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const userInfoUi = handleActions({
  [actions.getMeRequest](state) {
    return { ...state, requestState: 'request' };
  },
  [actions.getMeFailure](state) {
    return { ...state, requestState: 'failure' };
  },
  [actions.getMeSuccess](state) {
    return { ...state, requestState: 'success' };
  },
}, {});

export default userInfoUi;
