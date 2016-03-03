const item = (state, action) => {
	switch(action.type) {
		case 'ADD_ITEM' :
			return {}
		case 'REMOVE_ITEM' :
			return {}
	}
}

const items = (state = [], action) => {
	  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'REMOVE_ITEM':
      return state.map(t =>
        item(t, action)
      )
    default:
      return state
  }
}

export default items;
