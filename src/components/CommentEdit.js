import React from 'react';

const CommentEdit = ({saveChanges, setNewText, text}) => <input onKeyPress={(e) => saveChanges(e)} onChange={(e) => setNewText(e)} placeholder={text} />;

export default CommentEdit;