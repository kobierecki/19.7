import {combineReducers} from 'redux';
import comments from './commentsReducer';
import users from './usersReducer.js';

const rootReducer = combineReducers({
	comments,
	users
});

export default rootReducer;