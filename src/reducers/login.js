import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const login = handleActions({
  [actions.userLoginSuccess]() {
    return { role: 'user', isLoggedIn: true };
  },
}, {
  role: null,
  isLoggedIn: false,
});

export default login;
