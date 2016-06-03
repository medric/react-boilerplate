import { connect } from 'react-redux';
import { togglePost } from '../actions';
import { PostDetails } from '../components/partials';

const mapStateToProps = (state) => {
  return {
    post: state.posts.entry
  }
};

const mapDispatchToProps = (dispatch) => {

};

const PostEntity = connect(
  mapStateToProps,
)(PostDetails);

export default PostEntity;