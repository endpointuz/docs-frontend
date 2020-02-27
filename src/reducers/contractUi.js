import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const contractUi = handleActions({
  [actions.createContractRequest](state) {
    return {
      ...state,
      contractCreationState: 'request',
    };
  },
  [actions.createContractSuccess](state) {
    return {
      ...state,
      contractCreationState: 'success',
    };
  },
  [actions.createContractFailure](state) {
    return {
      ...state,
      contractCreationState: 'failure',
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
  [actions.publishContractRequest](state) {
    return { ...state, contractPublishingState: 'request' };
  },
  [actions.publishContractSuccess](state) {
    return { ...state, contractPublishingState: 'success' };
  },
  [actions.publishContractFailure](state) {
    return { ...state, contractPublishingState: 'failure' };
  },
  [actions.removeProductRequest](state) {
    return { ...state, removingProductState: 'request' };
  },
  [actions.removeProductFailure](state) {
    return { ...state, removingProductState: 'failure' };
  },
  [actions.removeProductSuccess](state) {
    return { ...state, removingProductState: 'success' };
  },
}, {
  contractCreationState: null,
  contractPublishingState: null,
  productRequestState: null,
  showProductForm: false,
  removingProductState: null,
});

export default contractUi;
