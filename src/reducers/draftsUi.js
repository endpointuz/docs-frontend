import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const draftsUi = handleActions({
  [actions.getDraftContractsSuccess](state) {
    return {
      ...state,
      contractsRequestState: 'success',
    };
  },
  [actions.getDraftContractsFailure](state) {
    return {
      ...state,
      contractsRequestState: 'failure',
    };
  },
  [actions.getDraftContractsRequest](state) {
    return {
      ...state,
      contractsRequestState: 'request',
    };
  },
  [actions.getDraftDetailsSuccess](state) {
    return {
      ...state,
      detailsRequestState: 'success',
    };
  },
  [actions.getDraftDetailsFailure](state) {
    return {
      ...state,
      detailsRequestState: 'failure',
    };
  },
  [actions.getDraftDetailsRequest](state) {
    return {
      ...state,
      detailsRequestState: 'request',
    };
  },
  [actions.showListInDrafts](state) {
    return {
      ...state,
      visibleContent: 'list',
    };
  },
  [actions.showDetailsInDrafts](state) {
    return {
      ...state,
      visibleContent: 'details',
    };
  },
  [actions.showEditFormInDrafts](state) {
    return {
      ...state,
      visibleContent: 'editForm',
    };
  },
  [actions.showOfferFormInDrafts](state) {
    return {
      ...state,
      visibleContent: 'offerForm',
    };
  },
}, {
  contractsRequestState: null,
  detailsRequestState: null,
  visibleContent: 'list',
});

export default draftsUi;
