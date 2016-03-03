import React, { PropTypes, Component } from 'react'

class Item extends Component {
	constructor(props) {
		super(props);
	},

	componentWillMount() {

	},

	componentWillUnmount() {

	},

    render() {
        return (
            <div>
            </div>
        );
    }

}

Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	content: PropTypes.object.isRequired
};

Item.defaultProps = {

};

export default Item;