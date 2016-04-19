import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ItemsList from '../components/partials/ItemsList'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items;
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.active);
  }
};

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(toggleItem(id))
    }
  }
};

const VisibleItemsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);

export default VisibleItemsList