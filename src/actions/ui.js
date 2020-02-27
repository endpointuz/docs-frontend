import { createAction } from 'redux-actions';

export const setStep = createAction('STEP_SET');

export const setActiveLanguage = createAction('ACTIVE_LANGUAGE_SET');

export const closeSuccessModal = createAction('SUCCESS_MODAL_CLOSE');
export const openSuccessModal = createAction('SUCCESS_MODAL_OPEN');

export const closeErrorModal = createAction('ERROR_MODAL_CLOSE');
export const openErrorModal = createAction('ERROR_MODAL_OPEN');

export const toggleCollapsingMenu = createAction('COLLAPSING_MENU_TOGGLE');

export const setActiveTabUserLoginPage = createAction('USER_LOGIN_PAGE_ACTIVE_TAB_SET');

export const saveUserData = createAction('USER_DATA_SAVE');
export const clearUserData = createAction('USER_DATA_CLEAR');

export const setHeaderTitle = createAction('HEADER_TITLE_SET');
export const setHeaderPageName = createAction('HEADER_PAGE_NAME_SET');

export const createContractNext = createAction('CONTRACT_CREATE_NEXT');
export const resetDocumentCreationData = createAction('CREATE_CONTRACT_STEP_RESET');

export const showProductForm = createAction('PRODUCT_FORM_SHOW');
export const hideProductForm = createAction('PRODUCT_FORM_HIDE');

export const showListInDrafts = createAction('LIST_IN_DRAFTS_SHOW');
export const showDetailsInDrafts = createAction('DETAILS_IN_DRAFTS_SHOW');
export const showEditFormInDrafts = createAction('EDIT_FORM_IN_DRAFTS_SHOW');
export const showOfferFormInDrafts = createAction('OFFER_FORM_IN_DRAFTS_SHOW');
