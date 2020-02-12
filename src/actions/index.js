import { createAction } from 'redux-actions';
import axios from 'axios';
import history from '../history';
import routes from '../routes';

export const setStep = createAction('STEP_SET');

export const setActiveLanguage = createAction('ACTIVE_LANGUAGE_SET');

export const userLoginRequest = createAction('USER_LOGIN_REQUEST');
export const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');
export const userLoginFailure = createAction('USER_LOGIN_FAILURE');

export const userLogin = (loginData) => async (dispatch) => {
  dispatch(userLoginRequest());
  try {
    const response = await axios.post(routes.userLogin(), loginData);
    localStorage.setItem('TOKEN', response.data.token);
    dispatch(userLoginSuccess());
    history.push('/panel');
  } catch (e) {
    console.log(e);
    dispatch(userLoginFailure({
      role: 'user',
      isLoggedIn: false,
    }));
  }
};
