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
