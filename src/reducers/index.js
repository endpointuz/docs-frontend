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
}, {
  step: 0,
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
  form: formReducer,
});
