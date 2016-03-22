import React, { PropTypes, Component } from 'react';
import Item from './Item.react';

class ItemsList extends Component {
	get data() {

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
            </div>
        );
    }

}

ItemsList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		content: PropTypes.object.isRequired,
	}).isRequired).isRequired,
	onItemClick: PropTypes.func.isRequired
}

ItemsList.defaultProps = {
};

export default ItemsList;