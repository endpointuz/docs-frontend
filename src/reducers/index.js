import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginFormUi from './loginFormUi';
import dashboardUi from './dashboardUi';
import userInfoUi from './userInfoUi';
import modals from './modals';
import languages from './languages';
import login from './login';
import userRegistrationData from './userRegistrationData';
import userInfo from './userInfo';
import countries from './countries';
import countriesUi from './countriesUi';
import currencies from './currencies';
import currenciesUi from './currenciesUi';
import banks from './banks';
import banksUi from './banksUi';
import supplyTerms from './suppplyTerms';
import supplyTermsUi from './supplyTermsUi';
import paymentTerms from './paymentTerms';
import paymentTermsUi from './paymentTermsUi';
import fileIds from './fileIds';
import categories from './categories';
import categoriesUi from './categoriesUi';
import tnveds from './tnveds';
import tnvedsUi from './tnvedsUi';
import units from './units';
import unitsUi from './unitsUi';
import contract from './contract';
import contractUi from './contractUi';


export default combineReducers({
  loginFormUi,
  dashboardUi,
  userInfoUi,
  countriesUi,
  currenciesUi,
  banksUi,
  supplyTermsUi,
  paymentTermsUi,
  unitsUi,
  tnvedsUi,
  categoriesUi,
  contractUi,
  modals,
  languages,
  login,
  userRegistrationData,
  userInfo,
  countries,
  currencies,
  banks,
  supplyTerms,
  paymentTerms,
  categories,
  tnveds,
  units,
  fileIds,
  contract,
  form: formReducer,
});
