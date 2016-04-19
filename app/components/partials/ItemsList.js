import React, { PropTypes, Component } from 'react';
import Item from './Item.js';

class ItemsList extends Component {
	get data() {
	}

  getInitialState() {
    return {items: [], visibilityFilter: ''};
  }

	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	componentWillUnmount() {

	}

  render() {
      return (
          <div>
              {
                  this.props.items.map(item =>
                      <Item key={item.id}
                          onClick={() => this.props.onItemClick(item.id)}
                      />
                  )
              }
          </div>
      );
  }

}

ItemsList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
		content: PropTypes.object.isRequired
	}).isRequired).isRequired,
	onItemClick: PropTypes.func.isRequired
};

ItemsList.defaultProps = {
};

export default ItemsList;