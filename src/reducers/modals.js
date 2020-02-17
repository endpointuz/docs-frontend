import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const modals = handleActions({
  [actions.closeSuccessModal](state) {
    return {
      ...state,
      success: { title: '', content: '', isVisible: false },
    };
  },
  [actions.openSuccessModal](state, { payload: { title, content } }) {
    return {
      ...state,
      success: { title, content, isVisible: true },
    };
  },
  [actions.closeErrorModal](state) {
    return {
      ...state,
      error: { title: '', content: '', isVisible: false },
    };
  },
  [actions.openErrorModal](state, { payload: { title, content } }) {
    return {
      ...state,
      error: { title, content, isVisible: true },
    };
  },
}, {
  success: { title: '', content: '', isVisible: false },
  warn: { title: '', content: '', isVisible: false },
  error: { title: '', content: '', isVisible: false },
});

export default modals;
