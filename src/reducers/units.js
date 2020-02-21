import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const units = handleActions({
  [actions.getUnitsSuccess](state, { payload: { units: unitList } }) {
    return unitList;
  },
}, {});

export default units;
