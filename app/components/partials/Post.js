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
			<div onClick = {this.props.onClick}>
				{this.props.title}
				{this.props.body}
			</div>
		);
	}

}

Post.propTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
};

Post.defaultProps = {

};

export default Post;