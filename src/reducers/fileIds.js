import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const fileIds = handleActions({
  [actions.sendFileSuccess](state, { payload: { id, file } }) {
    return [...state, { id, file }];
  },
  [actions.removeFile](state, { payload: { file } }) {
    return state.filter((el) => el.file.uid !== file.uid);
  },
}, []);

export default fileIds;
