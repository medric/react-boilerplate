import React, { PropTypes, Component } from 'react';

var Link = require('react-router').Link;

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
			<div className="page__container-content--post" onClick = {this.props.onClick}>
				<section className="page__container-content--post__header">
          <h2>{this.props.title}</h2>
        </section>
        <section className="page__container-content--post__content">
          {this.props.body}
			  </section>
        <section className="page__container-content--post__footer row">
          <div></div>
          <button><Link to={`/post/${this.props.id}`}>More</Link></button>
        </section>
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