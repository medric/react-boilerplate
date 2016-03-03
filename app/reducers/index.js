/**
 * Reducers entry point
 */
import { combineReducers } from 'redux'
import items from './items'
// import other reducers here

const itemApp = combineReducers({
	items,
})

export default itemApp