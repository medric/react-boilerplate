import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

const posts = (state, action) => {
    if(typeof state === 'undefined') {
      return window.__initialState__ ;
    }

    let newState = { ...state, ...action };

    switch (action.type) {
      case REQUEST_POSTS:
        return newState;
      case RECEIVE_POSTS:
        return newState;
      default:
        return state;
    }
};

export default posts;