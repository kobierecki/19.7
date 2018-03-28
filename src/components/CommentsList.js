import React from 'react';
import Comment from './CommentContainer';
import CommentAdd from './CommentAddContainer';

const CommentsList = ({comments}) => {
	return (
		<div>
			<CommentAdd />
			<ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
		</div>
	)
}

export default CommentsList;
