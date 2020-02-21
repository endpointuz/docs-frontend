import { createAction } from 'redux-actions';
import axios from 'axios';

import routes from '../routes';

import { createContractNext, hideProductForm } from './ui';

export const sendFileRequest = createAction('SEND_FILE_REQUEST');
export const sendFileSuccess = createAction('SEND_FILE_SUCCESS');
export const sendFileFailure = createAction('SEND_FILE_FAILURE');

export const removeFile = createAction('FILE_REMOVE');

export const sendFile = ({
  file, onProgress, onError, onSuccess,
}) => async (dispatch) => {
  dispatch(sendFileRequest());
  onProgress({ percent: 0 });
  try {
    const token = localStorage.getItem('TOKEN');
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(routes.files(), formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (e) => {
        onProgress({ percent: (e.loaded / e.total) * 100 });
      },
    });
    onSuccess('ok');
    dispatch(sendFileSuccess({ id: response.data, file }));
  } catch (e) {
    console.log(e);
    onError();
    dispatch(sendFileFailure());
  }
};

export const setActiveContract = createAction('ACTIVE_CONTRACT_SET');

export const createContractRequest = createAction('CREATE_CONTRACT_REQUEST');
export const createContractSuccess = createAction('CREATE_CONTRACT_SUCCESS');
export const createContractFailure = createAction('CREATE_CONTRACT_FAILURE');

export const createContract = (data) => async (dispatch) => {
  dispatch(createContractRequest());
  try {
    const token = localStorage.getItem('TOKEN');
    const response = await axios.post(routes.contractCreate(), data, {
      headers: {
        Authorization: token,
      },
    });
    const contractId = response.data.id;
    dispatch(createContractSuccess());
    dispatch(setActiveContract({ id: contractId }));
    dispatch(createContractNext());
  } catch (e) {
    console.log(e);
    dispatch(createContractFailure());
  }
};

export const createProductRequest = createAction('CREATE_PRODUCT_REQUEST');
export const createProductSuccess = createAction('CREATE_PRODUCT_SUCCESS');
export const createProductFailure = createAction('CREATE_PRODUCT_FAILURE');

export const createProduct = (data, id) => async (dispatch) => {
  dispatch(createProductRequest());
  try {
    const token = localStorage.getItem('TOKEN');
    const response = await axios.post(routes.productCreate(id), data, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    dispatch(createProductSuccess({ product: response.data }));
    dispatch(hideProductForm());
  } catch (e) {
    console.log(e);
    dispatch(createProductFailure());
  }
};
