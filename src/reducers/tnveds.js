import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const tnveds = handleActions({
  [actions.getTNVEDSSuccess](state, { payload: { tnveds: tnvList } }) {
    return tnvList;
  },
}, {});

export default tnveds;
