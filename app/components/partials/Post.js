import React, { PropTypes, Component } from 'react'

class Post extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<div onClick = { this.props.onClick }>
				{ this.props.data }
			</div>
		);
	}

}

Post.propTypes = {
	onClick: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired
};

Post.defaultProps = {

};

export default Post;