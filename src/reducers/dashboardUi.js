import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const dashboardUi = handleActions({
  [actions.toggleCollapsingMenu](state) {
    return {
      ...state,
      isMenuCollapsed: !state.isMenuCollapsed,
    };
  },
  [actions.setHeaderTitle](state, { payload: { title } }) {
    return {
      ...state,
      headerTitle: title,
    };
  },
  [actions.setHeaderPageName](state, { payload: { pageName } }) {
    return {
      ...state,
      headerPageName: pageName,
    };
  },
  [actions.createContractNext](state) {
    return {
      ...state,
      contractCreationStep: state.contractCreationStep + 1,
    };
  },
}, {
  isMenuCollapsed: false,
  headerTitle: 'welcome',
  headerPageName: 'dashboard',
  contractCreationStep: 1,
});

export default dashboardUi;
