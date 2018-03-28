import {connect} from 'react-redux';
import CommentAdd from './CommentAdd';
import {commentAdd} from '../actions/actions'

const mapDispatchToProps = dispatch => ({
	commentAdd: (text) => dispatch(commentAdd(text))
});

export default connect(null, mapDispatchToProps)(CommentAdd);