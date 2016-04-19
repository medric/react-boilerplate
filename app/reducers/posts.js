const post = (state, action) => {
    var newstate = Object.assign({}, state); // sloppily copying the old state here, so we never mutate it
    switch(action.type) {
      case 'UPDATE_POST':
        return [
          ...state,
          post(undefined, action)
        ];
      case 'REMOVE_POST':
        return state.map(t =>
          post(t, action)
        );
      default:
        return state;
    }
};

const posts = (state = {}, action) => {
    switch (action.type) {
      case 'RECEIVE_POSTS':
        return state.map(t =>
          posts(t, action)
        );
      case 'ADD_POST':
        return [
          ...state,
          post(undefined, action)
        ];
      case 'TOGGLE_POST':
        return state.map(t =>
          post(t, action)
        );
      default:
        return state
    }
};

export default posts;