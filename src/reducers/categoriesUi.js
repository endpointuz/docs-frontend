import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const categoriesUi = handleActions({
  [actions.getCategoriesSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
  [actions.getCategoriesFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
  [actions.getCategoriesRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
}, {});

export default categoriesUi;
