import * as constants from '../constants';

export function commentAdd(text) {
	return {
		type: constants.COMMENT_ADD,
		payload: {
			text
		}
	};
};

export function commentEdit(id, text) {
	return {
		type: constants.COMMENT_EDIT,
		payload: {
			id, 
			text
		}
	};
};

export function commentRemove(id) {
	return {
		type: constants.COMMENT_REMOVE,
		payload: {
			id
		}
	};
};

export function commentThumbUp(id) {
	return {
		type: constants.COMMENT_THUMB_UP,
		payload: {
			id
		}
	};
};

export function commentThumbDown(id) {
	return {
		type: constants.COMMENT_THUMB_DOWN,
		payload: {
			id
		}
	};
};