import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const contract = handleActions({
  [actions.setActiveDocument](state, { payload: { id } }) {
    return {
      ...state,
      currentDocumentId: id,
    };
  },
  [actions.createProductSuccess](state, { payload: { product } }) {
    return {
      ...state,
      products: [...state.products, product],
    };
  },
  [actions.resetDocumentCreationData](state) {
    return {
      ...state,
      currentDocumentId: null,
      products: [],
    };
  },
}, {
  currentDocumentId: null,
  products: [],
});

export default contract;
