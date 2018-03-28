import {connect} from 'react-redux';
import Comment from './Comment';
import {commentThumbUp, commentThumbDown, commentRemove, commentEdit} from '../actions/actions'

const mapDispatchToProps = dispatch => ({
	commentThumbUp: (id) => dispatch(commentThumbUp(id)),
	commentThumbDown: (id) => dispatch(commentThumbDown(id)),
	commentRemove: (id) => dispatch(commentRemove(id)),
	commentEdit: (id, text) => dispatch(commentEdit(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);