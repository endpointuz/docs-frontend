import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const languages = handleActions({
  [actions.setActiveLanguage](state, { payload: { lang } }) {
    return {
      ...state,
      active: lang,
    };
  },
}, {});

export default languages;
