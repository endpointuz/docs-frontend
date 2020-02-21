import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const categories = handleActions({
  [actions.getCategoriesSuccess](state, { payload: { categories: categoryList } }) {
    return categoryList;
  },
}, {});

export default categories;
