import { combineReducers } from 'redux';
import { form as formReducer } from 'redux-form';
import loginFormUi from './loginFormUi';
import dashboardUi from './dashboardUi';
import userInfoUi from './userInfoUi';
import modals from './modals';
import languages from './languages';
import login from './login';
import userRegistrationData from './userRegistrationData';
import userInfo from './userInfo';

export default combineReducers({
  loginFormUi,
  dashboardUi,
  userInfoUi,
  modals,
  languages,
  login,
  userRegistrationData,
  userInfo,
  form: formReducer,
});
