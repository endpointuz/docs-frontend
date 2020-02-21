import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const contractUi = handleActions({
  [actions.createContractRequest](state) {
    return {
      ...state,
      contractRequestState: 'request',
    };
  },
  [actions.createContractSuccess](state) {
    return {
      ...state,
      contractRequestState: 'success',
    };
  },
  [actions.createContractFailure](state) {
    return {
      ...state,
      contractRequestState: 'failure',
    };
  },
  [actions.createProductRequest](state) {
    return {
      ...state,
      productRequestState: 'request',
    };
  },
  [actions.createProductSuccess](state) {
    return {
      ...state,
      productRequestState: 'success',
    };
  },
  [actions.createProductFailure](state) {
    return {
      ...state,
      productRequestState: 'failure',
    };
  },
  [actions.showProductForm](state) {
    return {
      ...state,
      showProductForm: true,
    };
  },
  [actions.hideProductForm](state) {
    return {
      ...state,
      showProductForm: false,
    };
  },
}, {
  contractRequestState: null,
  productRequestState: null,
  showProductForm: false,
});

export default contractUi;
