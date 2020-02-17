import { handleActions } from 'redux-actions';
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
  [actions.setActiveTabUserLoginPage](state, { payload: { activeTab } }) {
    return {
      ...state,
      activeTab,
    };
  },
}, {
  activeTab: '1',
  step: 0,
  loading: false,
});

export default loginFormUi;
