import React, { PropTypes, Component } from 'react';
import Header from './Header';

class PostDetails extends Component {
	constructor(props) {
    	console.log(props);
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

PostDetails.propTypes = {
  isActive: PropTypes.bool.isRequired
};

PostDetails.defaultProps = {

};

export default PostDetails;
