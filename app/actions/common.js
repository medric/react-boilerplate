import { push } from 'react-router-redux';

/*
 * action types
 */
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const TOGGLE_POST = 'TOGGLE_POST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SHOW_POST = 'SHOW_POST';

function showPost(post) {
  return {
    type: SHOW_POST,
    entry: post
  }
}

/*
 * action creators
 */
export function addPost(fields) {
  return {
    type: ADD_POST,
    fields
  };
}

export function updatePost(fields) {
  return {
    type: UPDATE_POST,
    fields
  };
}

export function removePost(index) {
  return {
    type: REMOVE_POST,
    index
  };
}

export function togglePost(post) {
  return function (dispatch) {
    var to = `post/${post.id}`;
    dispatch(push(to));
    dispatch(showPost(post));
  }
}

export function 

