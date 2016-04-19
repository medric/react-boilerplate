/**
 * Reducers entry point
 */
import { combineReducers } from 'redux';
import posts from './posts';
// import other reducers here
import { routerReducer } from 'react-router-redux';

const postsApp = combineReducers({
	posts,
  routing: routerReducer
});

export default postsApp