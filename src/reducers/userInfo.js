import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const userInfo = handleActions({
  [actions.getMeSuccess](state, { payload: { user } }) {
    return user;
  },
}, {});

export default userInfo;
