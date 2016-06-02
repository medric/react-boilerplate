import React, { PropTypes, Component } from 'react';
import Post from './Post';

class PostsList extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}

  // component
  componentWillUpdate () {
    const { store, router } = this.context;
    const { application } = this.props;
    // if (application.shouldRedirect) {
    //   store.dispatch(applicationActions.resetSubmitState())
    //   router.transition(...)
    // }
    console.log(store);
  }

  render() {
      return (
          <div className="page__container-content row">
              {
                  this.props.posts.map(post => {
                    return <Post key={post.id}
                      {...post}
                      onClick={() => this.props.onPostClick(post.id)}
                    />
                  }, this)
              }
          </div>
      );
  }

}

PostsList.propTypes = {
	posts: PropTypes.array,
  onPostClick: PropTypes.func.isRequired
};

PostsList.defaultProps = {
  posts: [],
  visibilityFilter: 'SHOW_ALL'
};

export default PostsList;