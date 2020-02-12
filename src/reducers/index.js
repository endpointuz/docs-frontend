import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const loginFormUi = handleActions({
  [actions.setStep](state, { payload: { step } }) {
    return {
      ...state, step,
    };
  },
  [actions.userLoginRequest](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [actions.userLoginSuccess](state) {
    return {
      ...state,
      loading: false,
    };
  },
  [actions.userLoginFailure](state) {
    return {
      ...state,
      loading: false,
    };
  },
}, {
  step: 0,
  loading: false,
});

const login = handleActions({
  [actions.userLoginSuccess]() {
    return { role: 'user', isLoggedIn: true };
  },
}, {
  role: null,
  isLoggedIn: false,
});

const languages = handleActions({
  [actions.setActiveLanguage](state, { payload: { lang } }) {
    return {
      ...state,
      active: lang,
    };
  },
}, {});

export default combineReducers({
  loginFormUi,
  languages,
  login,
  form: formReducer,
});
