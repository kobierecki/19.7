import * as constants from '../constants';
import uuid from 'uuid';

export default function commentsReducer(state = [], action) {
	let newStateComments;
	
	switch(action.type) {
		case constants.COMMENT_ADD:		  
			return [{
				id: uuid.v4(),
				text: action.payload.text,
				votes: 0
		  }, ...state];

		case constants.COMMENT_REMOVE:
			return [...state.filter(comment => comment.id !== action.payload.id)];
		
		case constants.COMMENT_THUMB_UP:
			newStateComments = state.map(comment => {
				if(comment.id === action.payload.id) {
					return {...comment, votes: comment.votes + 1}
				}
				return comment;
			});
			return [...newStateComments];
		
		case constants.COMMENT_THUMB_DOWN:
			newStateComments = state.map(comment => {
				if(comment.id === action.payload.id) {
					return {...comment, votes: comment.votes - 1}
				}
				return comment;
			});
			return [...newStateComments];
		
		case constants.COMMENT_EDIT:
			newStateComments = state.map(comment => {
				if(comment.id === action.payload.id) {
					comment.text = action.payload.text;
					return comment;
				}
				return comment;
			});
			return [...newStateComments];

		default:
			return state;
	};
};

