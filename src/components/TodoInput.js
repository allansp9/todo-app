import React, { Component } from 'react'

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
          <input type="text"
                 placeholder="Type in your TODO"
                 value={this.state.inputText}
                 onChange={this.handleChange.bind(this)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoInput
