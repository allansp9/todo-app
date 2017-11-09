import React, { Component } from 'react'
import actions from '../redux/actions/index'

class TodoInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(actions.addTodo(this.state.inputText))
  }

  render() {
    return (
      <div>
        <input type="text"
               placeholder="Type in your TODO"
               value={this.state.inputText}
               onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Add</button>
      </div>
    );
  }
}

export default TodoInput
