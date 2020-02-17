import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const userRegistrationData = handleActions({
  [actions.saveUserData](state, { payload: { data } }) {
    return { ...state, ...data };
  },
  [actions.clearUserData]() {
    return {};
  },
}, {});

export default userRegistrationData;
