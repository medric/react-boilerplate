import { connect } from 'react-redux';
import { togglePost } from '../actions';
import { PostsList } from '../components/partials';

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return posts;
    case 'SHOW_ACTIVE':
      //return posts.filter(t => !t.active);
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.entries
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => {
      dispatch(togglePost(id));
    }
  }
};

const VisiblePostsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);

export default VisiblePostsList