import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const getCountriesRequest = createAction('GET_COUNTRIES_REQUEST');
export const getCountriesSuccess = createAction('GET_COUNTRIES_SUCCESS');
export const getCountriesFailure = createAction('GET_COUNTRIES_FAILURE');

export const getCountries = (params = { limit: 1000 }) => async (dispatch) => {
  dispatch(getCountriesRequest());
  try {
    const response = await axios.get(routes.countries(), {
      params,
    });
    dispatch(getCountriesSuccess({ countries: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getCountriesFailure());
  }
};

export const getCurrenciesRequest = createAction('GET_CURRENCIES_REQUEST');
export const getCurrenciesSuccess = createAction('GET_CURRENCIES_SUCCESS');
export const getCurrenciesFailure = createAction('GET_CURRENCIES_FAILURE');

export const getCurrencies = (params) => async (dispatch) => {
  dispatch(getCurrenciesRequest());
  try {
    const response = await axios.get(routes.currencies(), {
      params,
    });
    dispatch(getCurrenciesSuccess({ currencies: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getCurrenciesFailure());
  }
};

export const getBanksRequest = createAction('GET_BANKS_REQUEST');
export const getBanksSuccess = createAction('GET_BANKS_SUCCESS');
export const getBanksFailure = createAction('GET_BANKS_FAILURE');

export const getBanks = (params) => async (dispatch) => {
  dispatch(getBanksRequest());
  try {
    const response = await axios.get(routes.banks(), {
      params,
    });
    dispatch(getBanksSuccess({ banks: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getBanksFailure());
  }
};

export const getSupplyTermsRequest = createAction('GET_SUPPLY_TERMS_REQUEST');
export const getSupplyTermsSuccess = createAction('GET_SUPPLY_TERMS_SUCCESS');
export const getSupplyTermsFailure = createAction('GET_SUPPLY_TERMS_FAILURE');

export const getSupplyTerms = (params) => async (dispatch) => {
  dispatch(getSupplyTermsRequest());
  try {
    const response = await axios.get(routes.supplyTerms(), {
      params,
    });
    dispatch(getSupplyTermsSuccess({ supplyTerms: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getSupplyTermsFailure());
  }
};

export const getPaymentTermsRequest = createAction('GET_PAYMENT_TERM_REQUEST');
export const getPaymentTermsSuccess = createAction('GET_PAYMENT_TERM_SUCCESS');
export const getPaymentTermsFailure = createAction('GET_PAYMENT_TERM_FAILURE');

export const getPaymentTerms = (params) => async (dispatch) => {
  dispatch(getPaymentTermsRequest());
  try {
    const response = await axios.get(routes.paymentTerms(), {
      params,
    });
    dispatch(getPaymentTermsSuccess({ paymentTerms: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getPaymentTermsFailure());
  }
};

export const getCategoriesRequest = createAction('GET_CATEGORIES_REQUEST');
export const getCategoriesSuccess = createAction('GET_CATEGORIES_SUCCESS');
export const getCategoriesFailure = createAction('GET_CATEGORIES_FAILURE');

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesRequest());
  try {
    const response = await axios.get(routes.categories());
    dispatch(getCategoriesSuccess({ categories: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getCategoriesFailure());
  }
};

export const getUnitsRequest = createAction('GET_UNITS_REQUEST');
export const getUnitsSuccess = createAction('GET_UNITS_SUCCESS');
export const getUnitsFailure = createAction('GET_UNITS_FAILURE');

export const getUnits = () => async (dispatch) => {
  dispatch(getUnitsRequest());
  try {
    const response = await axios.get(routes.units());
    dispatch(getUnitsSuccess({ units: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getUnitsFailure());
  }
};

export const getTNVEDSRequest = createAction('GET_TNVEDS_REQUEST');
export const getTNVEDSSuccess = createAction('GET_TNVEDS_SUCCESS');
export const getTNVEDSFailure = createAction('GET_TNVEDS_FAILURE');

export const getTNVEDS = () => async (dispatch) => {
  dispatch(getTNVEDSRequest());
  try {
    const response = await axios.get(routes.tnveds());
    dispatch(getTNVEDSSuccess({ tnveds: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getTNVEDSFailure());
  }
};
