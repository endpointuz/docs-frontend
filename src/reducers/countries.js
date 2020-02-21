import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const countries = handleActions({
  [actions.getCountriesSuccess](state, { payload: { countries: countriesList } }) {
    return countriesList;
  },
}, {});

export default countries;
