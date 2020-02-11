import { createAction } from 'redux-actions';
import axios from 'axios';

export const inc = createAction('INCR');
export const dec = createAction('DECR');

export const getPostsRequest = createAction('GET_POSTS_REQUEST');
export const getPostsFailure = createAction('GET_POSTS_FAILURE');
export const getPostsSuccess = createAction('GET_POSTS_SUCCESS');

export const getPosts = () => async (dispatch) => {
  dispatch(getPostsRequest());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(getPostsSuccess({ posts: response.data }));
  } catch (e) {
    alert('Произошла ошибка!');
    dispatch(getPostsFailure());
  }
};

// export const inc = () => ({ type: 'INC' });
// export const dec = () => ({ type: 'DEC' });
