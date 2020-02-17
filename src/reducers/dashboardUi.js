import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const dashboardUi = handleActions({
  [actions.toggleCollapsingMenu](state) {
    return {
      ...state,
      isMenuCollapsed: !state.isMenuCollapsed,
    };
  },
}, {
  isMenuCollapsed: false,
});

export default dashboardUi;
