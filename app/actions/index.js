/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_ITEM = 'UPDATE_TODO';
export const REMOVE_ITEM = 'UPDATE_TODO';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * action creators
 */

export function addItem(fields) {
  return {
    type: ADD_ITEM,
    fields
  };
}

export function updateItem(fields) {
  return {
    type: UPDATE_ITEM,
    fields
  };
}

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    index
  };
}

export function toggleItem(index) {
  return {
    type: TOGGLE_ITEM,
    index
  }
}
