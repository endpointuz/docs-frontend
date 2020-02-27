import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const getDraftContractsRequest = createAction('GET_DRAFT_CONTRACT_REQUEST');
export const getDraftContractsSuccess = createAction('GET_DRAFT_CONTRACT_SUCCESS');
export const getDraftContractsFailure = createAction('GET_DRAFT_CONTRACT_FAILURE');

export const getDraftContracts = () => async (dispatch) => {
  dispatch(getDraftContractsRequest());
  try {
    const response = await axios.get(routes.draftContracts());
    dispatch(getDraftContractsSuccess({ list: response.data.results }));
  } catch (e) {
    console.log(e);
    dispatch(getDraftContractsFailure());
  }
};

export const getDraftDetailsRequest = createAction('GET_DRAFT_DETAILS_REQUEST');
export const getDraftDetailsSuccess = createAction('GET_DRAFT_DETAILS_SUCCESS');
export const getDraftDetailsFailure = createAction('GET_DRAFT_DETAILS_FAILURE');

export const getDraftDetails = (id) => async (dispatch) => {
  dispatch(getDraftDetailsRequest());
  try {
    const response = await axios.get(routes.draftDetails(id));
    dispatch(getDraftDetailsSuccess({ contract: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getDraftDetailsFailure());
  }
};
