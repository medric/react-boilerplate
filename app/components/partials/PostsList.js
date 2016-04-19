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
          <div>
              {
                  this.props.posts.map(post =>
                      <Post key={post.id}
                          onClick={() => this.props.onPostClick(post.id)}
                      />
                  )
              }
          </div>
      );
  }

}

PostsList.propTypes = {
	posts: PropTypes.array,
  visibilityFilter: PropTypes.oneOf(['SHOW_ALL', 'SHOW_ACTIVE']),
	onPostClick: PropTypes.func.isRequired
};

PostsList.defaultProps = {
  visibilityFilter: 'SHOW_ALL'
};

export default PostsList;