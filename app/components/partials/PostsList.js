import React, { PropTypes, Component } from 'react';
import Post from './Post.js';

class PostsList extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}

  render() {
      return (
          <div className="page__container-content row">
              {
                  this.props.posts.map(post =>
                    <Post key={post.id}
                          {...post}
                          onClick={this.props.onPostClick}
                    />
                  )
              }
          </div>
      );
  }

}

PostsList.propTypes = {
	posts: PropTypes.array
};

PostsList.defaultProps = {
  posts: [],
  visibilityFilter: 'SHOW_ALL'
};

export default PostsList;