import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TodoInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value.trim()
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.inputText !== "") {
      this.props.addTodo(this.state.inputText)
      this.setState({
        inputText: ''
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField hintText="add your TODO item" value={this.state.inputText} onChange={this.handleChange.bind(this)}></TextField>
          <RaisedButton label="add" type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoInput
