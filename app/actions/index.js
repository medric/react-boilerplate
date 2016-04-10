export function addItem(fields) {
  return {
    type: 'ADD_ITEM',
    fields
  };
}

export function delItem(index) {
  return {
    type: 'REMOVE_ITEM',
    index
  };
}