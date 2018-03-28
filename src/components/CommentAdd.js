import React from 'react';

class CommentAdd extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};

   	this.handleChange = this.handleChange.bind(this);
   	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		this.props.commentAdd(this.state.value);
		this.setState({value: ''});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Dodaj komentarz: <input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Wyślij" />
			</form>
		)
	}
}

export default CommentAdd;