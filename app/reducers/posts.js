import { REQUEST_POSTS, RECEIVE_POSTS, TOGGLE_POST } from '../actions';

const posts = (state, action) => {
    let newState = { ...state, ...action };
  
    switch (action.type) {
      case REQUEST_POSTS:
        return newState;
      case RECEIVE_POSTS:
        console.log('r', newState);
        return newState;
      default:
        return newState;
    }
};

export default posts;