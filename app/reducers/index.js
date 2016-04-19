/**
 * Reducers entry point
 */
import { combineReducers } from 'redux';
import items from './items';
// import other reducers here
import { routerReducer } from 'react-router-redux';

const itemsApp = combineReducers({
	items,
  routing: routerReducer
});

export default itemsApp