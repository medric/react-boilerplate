import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts,
    receivedAt: Date.now()
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
        // Updates the app state with the results of the API call.
        dispatch(receivePosts(posts));
      })
      .catch(err =>
        console.log(err)
      )
  }
}