import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts() {
  return {
    type: REQUEST_POSTS,
    entries: [],
    fetched: false
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    entries: posts,
    receivedAt: Date.now(),
    fetched: true
  }
}

export function fetchPosts() {

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    dispatch(requestPosts());

    return fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function(posts) {
        // Update the app state with the results of the API call
        dispatch(receivePosts(posts));
      })
      .catch(err =>
        console.log(err)
      )
  }
}