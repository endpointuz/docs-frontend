import { createAction } from 'redux-actions';
import axios from 'axios';
import { message } from 'antd';
import history from '../history';
import routes from '../routes';
import {
  openErrorModal, openSuccessModal, setActiveTabUserLoginPage, setStep, clearUserData,
} from './ui';


export const userLoginRequest = createAction('USER_LOGIN_REQUEST');
export const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');
export const userLoginFailure = createAction('USER_LOGIN_FAILURE');

export const userLogin = (loginData) => async (dispatch) => {
  dispatch(userLoginRequest());
  try {
    const response = await axios.post(routes.userLogin(), loginData);
    localStorage.setItem('TOKEN', response.data.token);
    dispatch(userLoginSuccess());
    history.push('/panel/add-contract');
  } catch (e) {
    if (e.response) {
      message.error(e.response.data.detail);
    }
    console.log(e);
    dispatch(userLoginFailure({
      role: 'user',
      isLoggedIn: false,
    }));
  }
};

export const userCreateRequest = createAction('USER_CREATE_REQUEST');
export const userCreateSuccess = createAction('USER_CREATE_SUCCESS');
export const userCreateFailure = createAction('USER_CREATE_FAILURE');

export const userCreate = (userData) => async (dispatch) => {
  dispatch(userCreateRequest());
  try {
    await axios.post(routes.userCreate(), userData);
    dispatch(clearUserData());
    dispatch(userCreateSuccess());
    dispatch(openSuccessModal({ title: 'thanks for registration', content: 'confirm email' }));
    dispatch(setActiveTabUserLoginPage({ activeTab: '1' }));
    dispatch(setStep({ step: 0 }));
  } catch (e) {
    console.log(e);
    dispatch(userCreateFailure());
  }
};

export const getMeRequest = createAction('GET_ME_REQUEST');
export const getMeSuccess = createAction('GET_ME_SUCCESS');
export const getMeFailure = createAction('GET_ME_FAILURE');

export const getMe = () => async (dispatch) => {
  dispatch(getMeRequest());
  try {
    const response = await axios.get(routes.getCompanyInfo(), {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    });
    dispatch(getMeSuccess({ user: response.data }));
  } catch (e) {
    dispatch(getMeFailure());
  }
};

export const verifyEmailRequest = createAction('VERIFY_EMAIL_REQUEST');
export const verifyEmailFailure = createAction('VERIFY_EMAIL_FAILURE');
export const verifyEmailSuccess = createAction('VERIFY_EMAIL_SUCCESS');

export const verifyEmail = (code) => async (dispatch) => {
  dispatch(verifyEmailRequest());
  try {
    await axios.post(routes.verifyEmail(), { code });
    dispatch(verifyEmailSuccess());
    history.push('/');
    dispatch(openSuccessModal({ title: 'registration complete', content: 'you will get access after moderator verify your account' }));
  } catch (e) {
    history.push('/');
    if (e.response) {
      const content = e.response.data.detail || e.response.data.code[0];
      dispatch(openErrorModal({ title: 'registration failure', content }));
    }
    dispatch(verifyEmailFailure());
  }
};
