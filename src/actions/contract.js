import { createAction } from 'redux-actions';
import { message } from 'antd';
import axios from 'axios';

import routes from '../routes';

import { createContractNext, hideProductForm, openErrorModal, openSuccessModal } from './ui';
import { getDraftContracts } from './contractList';

export const sendFileRequest = createAction('SEND_FILE_REQUEST');
export const sendFileSuccess = createAction('SEND_FILE_SUCCESS');
export const sendFileFailure = createAction('SEND_FILE_FAILURE');

export const removeFile = createAction('FILE_REMOVE');
export const clearFiles = createAction('FILES_CLEAR');
export const addMultipleFiles = createAction('MULTIPLE_FILES_ADD');

export const sendFile = ({
  file, onProgress, onError, onSuccess,
}) => async (dispatch) => {
  dispatch(sendFileRequest());
  onProgress({ percent: 0 });
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(routes.files(), formData, {
      headers: {
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

export const setActiveDocument = createAction('ACTIVE_DOCUMENT_SET');

export const createContractRequest = createAction('CREATE_CONTRACT_REQUEST');
export const createContractSuccess = createAction('CREATE_CONTRACT_SUCCESS');
export const createContractFailure = createAction('CREATE_CONTRACT_FAILURE');

export const createContract = (data) => async (dispatch) => {
  dispatch(createContractRequest());
  try {
    const response = await axios.post(routes.contractCreate(), data);
    const contractId = response.data.id;
    dispatch(createContractSuccess());
    dispatch(setActiveDocument({ id: contractId }));
    dispatch(createContractNext());
    dispatch(clearFiles());
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
    const response = await axios.post(routes.productCreate(id), data);
    console.log(response);
    dispatch(createProductSuccess({ product: response.data }));
    dispatch(hideProductForm());
  } catch (e) {
    console.log(e);
    dispatch(createProductFailure());
  }
};

export const removeProductRequest = createAction('REMOVE_PRODUCT_REQUEST');
export const removeProductSuccess = createAction('REMOVE_PRODUCT_SUCCESS');
export const removeProductFailure = createAction('REMOVE_PRODUCT_FAILURE');

export const removeProduct = (id) => async (dispatch) => {
  dispatch(removeProductRequest());
  try {
    const response = await axios.delete(routes.productRemove(id));
    console.log(response.data);
    dispatch(removeProductSuccess());
  } catch (e) {
    console.log(e);
    dispatch(removeProductFailure());
  }
};

export const editProductRequest = createAction('PRODUCT_EDIT_REQUEST');
export const editProductSuccess = createAction('PRODUCT_EDIT_SUCCESS');
export const editProductFailure = createAction('PRODUCT_EDIT_FAILURE');

export const editProduct = (data, id) => async (dispatch) => {
  dispatch(editProductRequest());
  try {
    const response = await axios.put(routes.productEdit(id), data);
    console.log(response.data);
    dispatch(editProductSuccess());
  } catch (e) {
    console.log(e);
    dispatch(editProductFailure());
  }
};

export const createOfferRequest = createAction('CREATE_OFFER_REQUEST');
export const createOfferSuccess = createAction('CREATE_OFFER_SUCCESS');
export const createOfferFailure = createAction('CREATE_OFFER_FAILURE');

export const createOffer = (data, id) => async (dispatch) => {
  dispatch(createOfferRequest());
  try {
    const response = await axios.post(routes.offerCreate(id), data);
    dispatch(createOfferSuccess());
    dispatch(setActiveDocument({ id: response.data.id }));
    dispatch(createContractNext());
    dispatch(clearFiles());
  } catch (e) {
    console.log(e);
    dispatch(createOfferFailure());
  }
};

export const publishContractRequest = createAction('PUBLISH_CONTRACT_REQUEST');
export const publishContractSuccess = createAction('PUBLISH_CONTRACT_SUCCESS');
export const publishContractFailure = createAction('PUBLISH_CONTRACT_FAILURE');

export const publishContract = (id) => async (dispatch) => {
  dispatch(publishContractRequest());
  try {
    const response = await axios.post(routes.contractPublish(id));
    dispatch(publishContractSuccess());
    dispatch(getDraftContracts());
    dispatch(openSuccessModal({ title: 'contract send title', content: 'contract send content' }));
  } catch (e) {
    console.log(e);
    if (e.response) {
      dispatch(openErrorModal({ title: 'contract send failure title', content: e.response.data.detail }));
      // message.error(e.response.data.detail);
    }
    dispatch(publishContractFailure());
  }
};

export const editContractRequest = createAction('EDIT_CONTRACT_REQUEST');
export const editContractSuccess = createAction('EDIT_CONTRACT_SUCCESS');
export const editContractFailure = createAction('EDIT_CONTRACT_FAILURE');

export const editContract = (data, id) => async (dispatch) => {
  dispatch(editContractRequest());
  try {
    const response = await axios.put(routes.contractEdit(id), data);
    console.log(response.data);
    dispatch(editContractSuccess());
    dispatch(clearFiles());
  } catch (e) {
    console.log(e);
    dispatch(editContractFailure());
  }
};
