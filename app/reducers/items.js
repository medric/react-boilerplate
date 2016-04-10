const item = (state, action) => {
    var newstate = Object.assign({}, state); // sloppily copying the old state here, so we never mutate it
    switch(action.type) {
		case 'ADD_ITEM' :
			return {};
		case 'REMOVE_ITEM' :
			return {};
        default:
            return state;
	}
};

const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
          return [
            ...state,
            item(undefined, action)
          ];
        case 'REMOVE_ITEM':
          return state.map(t =>
            item(t, action)
          );
        default:
          return state
    }
};

export default items;
