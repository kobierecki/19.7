import React from 'react';
import CommentEdit from './CommentEdit';

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editComment: false,
			text: ''
		}
		this.changeToEdit = this.changeToEdit.bind(this);
		this.setNewText = this.setNewText.bind(this);
		this.saveChanges = this.saveChanges.bind(this);
	}

	changeToEdit() {
		this.setState({editComment: !this.state.editComment})
	}

	setNewText(e) {
		this.setState({text: e.target.value})
	}

	saveChanges(e) {
		if (e.key == 'Enter') {
			this.props.commentEdit(this.props.id, this.state.text);
			this.setState({
				editComment: !this.state.editComment,
				text: ''
			})
		}
	}

	render() {
		return (
			<li>
				{this.state.editComment ? 
					<CommentEdit saveChanges={this.saveChanges} setNewText={this.setNewText} text={this.props.text} />:
					<span onClick={() => this.changeToEdit()}>{this.props.text}</span>
				} 
				<br />
				<span>votes: {this.props.votes}</span>
				<button onClick={() => this.props.commentThumbUp(this.props.id)}>Thumb up</button>
				<button onClick={() => this.props.commentThumbDown(this.props.id)}>Thumb down</button>
				<button onClick={() => this.props.commentRemove(this.props.id)}>Remove</button>
			</li>
		)
	}
}

export default Comment;